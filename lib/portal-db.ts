import 'server-only';
import { sql } from '@/lib/db';
import {
  PortalMember,
  ProjectUpdate,
  ArchitectureNode,
  ScopeCartItem,
  PortalProject,
  DEFAULT_ARCHITECTURE_NODES,
  DEFAULT_CART_ITEMS,
  AVAILABLE_ADDONS
} from './portal-types';

export * from './portal-types';

export async function ensurePortalTablesExist() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS portal_members (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        company VARCHAR(255),
        phone VARCHAR(50),
        role VARCHAR(50) DEFAULT 'member',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS portal_projects (
        id SERIAL PRIMARY KEY,
        member_id INTEGER REFERENCES portal_members(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        service_type VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        budget VARCHAR(100),
        status VARCHAR(50) DEFAULT 'submitted',
        progress_percent INTEGER DEFAULT 15,
        architecture_data JSONB DEFAULT '{}',
        cart_items JSONB DEFAULT '[]',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS portal_project_updates (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES portal_projects(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        stage VARCHAR(100),
        author_name VARCHAR(100) DEFAULT 'Achtrex Engineering Team',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
  } catch (error) {
    console.error('ensurePortalTablesExist error:', error);
  }
}

export async function getMemberByEmail(email: string): Promise<PortalMember | null> {
  await ensurePortalTablesExist();
  try {
    const { rows } = await sql`
      SELECT * FROM portal_members WHERE LOWER(email) = LOWER(${email.trim()}) LIMIT 1
    `;
    return rows[0] || null;
  } catch (err) {
    console.error('getMemberByEmail error:', err);
    return null;
  }
}

export async function getMemberById(id: number): Promise<PortalMember | null> {
  await ensurePortalTablesExist();
  try {
    const { rows } = await sql`
      SELECT * FROM portal_members WHERE id = ${id} LIMIT 1
    `;
    return rows[0] || null;
  } catch (err) {
    console.error('getMemberById error:', err);
    return null;
  }
}

export async function createPortalMember(data: {
  name: string;
  email: string;
  password_hash: string;
  company?: string;
  phone?: string;
}): Promise<PortalMember> {
  await ensurePortalTablesExist();
  const { rows } = await sql`
    INSERT INTO portal_members (name, email, password_hash, company, phone)
    VALUES (${data.name}, ${data.email.toLowerCase().trim()}, ${data.password_hash}, ${data.company || ''}, ${data.phone || ''})
    RETURNING *
  `;
  return rows[0];
}

export async function createPortalProject(data: {
  member_id: number;
  title: string;
  service_type: string;
  description: string;
  budget?: string;
}): Promise<PortalProject> {
  await ensurePortalTablesExist();
  const initialArchitecture = {
    overview: `Dedicated high-performance architecture provisioned for ${data.title}`,
    nodes: DEFAULT_ARCHITECTURE_NODES
  };

  const { rows } = await sql`
    INSERT INTO portal_projects (
      member_id, title, service_type, description, budget,
      status, progress_percent, architecture_data, cart_items
    )
    VALUES (
      ${data.member_id},
      ${data.title},
      ${data.service_type},
      ${data.description},
      ${data.budget || 'Custom Scope'},
      'reviewing',
      20,
      ${JSON.stringify(initialArchitecture)},
      ${JSON.stringify(DEFAULT_CART_ITEMS)}
    )
    RETURNING *
  `;

  const project = rows[0];

  // Insert initial project welcome update
  await sql`
    INSERT INTO portal_project_updates (project_id, title, content, stage, author_name)
    VALUES (
      ${project.id},
      'Project Request Received & Architecture Scoping Initialized',
      'Your project request has been logged. Our lead solutions architect is reviewing your technical specifications and preparing your interactive system architecture and implementation cart.',
      'Discovery & Planning',
      'Achtrex Engineering Team'
    )
  `;

  return project;
}

export async function getMemberProjects(memberId: number): Promise<PortalProject[]> {
  await ensurePortalTablesExist();
  try {
    const { rows } = await sql`
      SELECT * FROM portal_projects
      WHERE member_id = ${memberId}
      ORDER BY created_at DESC
    `;
    return rows.map((r: any) => ({
      ...r,
      architecture_data: typeof r.architecture_data === 'string' ? JSON.parse(r.architecture_data) : (r.architecture_data || { nodes: DEFAULT_ARCHITECTURE_NODES }),
      cart_items: typeof r.cart_items === 'string' ? JSON.parse(r.cart_items) : (r.cart_items || DEFAULT_CART_ITEMS)
    }));
  } catch (err) {
    console.error('getMemberProjects error:', err);
    return [];
  }
}

export async function getProjectById(projectId: number): Promise<PortalProject | null> {
  await ensurePortalTablesExist();
  try {
    const { rows } = await sql`
      SELECT p.*, m.name as member_name, m.email as member_email, m.company as member_company, m.phone as member_phone
      FROM portal_projects p
      JOIN portal_members m ON p.member_id = m.id
      WHERE p.id = ${projectId}
      LIMIT 1
    `;
    if (rows.length === 0) return null;
    const r = rows[0];
    return {
      ...r,
      architecture_data: typeof r.architecture_data === 'string' ? JSON.parse(r.architecture_data) : (r.architecture_data || { nodes: DEFAULT_ARCHITECTURE_NODES }),
      cart_items: typeof r.cart_items === 'string' ? JSON.parse(r.cart_items) : (r.cart_items || DEFAULT_CART_ITEMS)
    };
  } catch (err) {
    console.error('getProjectById error:', err);
    return null;
  }
}

export async function getProjectUpdates(projectId: number): Promise<ProjectUpdate[]> {
  await ensurePortalTablesExist();
  try {
    const { rows } = await sql`
      SELECT * FROM portal_project_updates
      WHERE project_id = ${projectId}
      ORDER BY created_at DESC
    `;
    return rows;
  } catch (err) {
    console.error('getProjectUpdates error:', err);
    return [];
  }
}

export async function getAllProjectsForAdmin(): Promise<PortalProject[]> {
  await ensurePortalTablesExist();
  try {
    const { rows } = await sql`
      SELECT p.*, m.name as member_name, m.email as member_email, m.company as member_company, m.phone as member_phone
      FROM portal_projects p
      LEFT JOIN portal_members m ON p.member_id = m.id
      ORDER BY p.created_at DESC
    `;
    return rows.map((r: any) => ({
      ...r,
      architecture_data: typeof r.architecture_data === 'string' ? JSON.parse(r.architecture_data) : (r.architecture_data || { nodes: DEFAULT_ARCHITECTURE_NODES }),
      cart_items: typeof r.cart_items === 'string' ? JSON.parse(r.cart_items) : (r.cart_items || DEFAULT_CART_ITEMS)
    }));
  } catch (err) {
    console.error('getAllProjectsForAdmin error:', err);
    return [];
  }
}

export async function addProjectUpdate(data: {
  project_id: number;
  title: string;
  content: string;
  stage?: string;
  author_name?: string;
}) {
  await ensurePortalTablesExist();
  const { rows } = await sql`
    INSERT INTO portal_project_updates (project_id, title, content, stage, author_name)
    VALUES (
      ${data.project_id},
      ${data.title},
      ${data.content},
      ${data.stage || 'Engineering Update'},
      ${data.author_name || 'Achtrex Engineering Team'}
    )
    RETURNING *
  `;
  return rows[0];
}

export async function updateProjectStatus(projectId: number, status: string, progress_percent: number) {
  await ensurePortalTablesExist();
  const { rows } = await sql`
    UPDATE portal_projects
    SET status = ${status}, progress_percent = ${progress_percent}, updated_at = CURRENT_TIMESTAMP
    WHERE id = ${projectId}
    RETURNING *
  `;
  return rows[0];
}

export async function updateProjectCartItems(projectId: number, cart_items: ScopeCartItem[]) {
  await ensurePortalTablesExist();
  const { rows } = await sql`
    UPDATE portal_projects
    SET cart_items = ${JSON.stringify(cart_items)}, updated_at = CURRENT_TIMESTAMP
    WHERE id = ${projectId}
    RETURNING *
  `;
  return rows[0];
}

export async function updateProjectArchitecture(projectId: number, architecture_data: any) {
  await ensurePortalTablesExist();
  const { rows } = await sql`
    UPDATE portal_projects
    SET architecture_data = ${JSON.stringify(architecture_data)}, updated_at = CURRENT_TIMESTAMP
    WHERE id = ${projectId}
    RETURNING *
  `;
  return rows[0];
}

export async function updateProjectDetails(projectId: number, data: {
  title?: string;
  service_type?: string;
  budget?: string;
  description?: string;
  status?: string;
  progress_percent?: number;
}) {
  await ensurePortalTablesExist();
  const current = await getProjectById(projectId);
  if (!current) return null;

  const title = data.title !== undefined ? data.title : current.title;
  const service_type = data.service_type !== undefined ? data.service_type : current.service_type;
  const budget = data.budget !== undefined ? data.budget : current.budget;
  const description = data.description !== undefined ? data.description : current.description;
  const status = data.status !== undefined ? data.status : current.status;
  const progress_percent = data.progress_percent !== undefined ? data.progress_percent : current.progress_percent;

  const { rows } = await sql`
    UPDATE portal_projects
    SET title = ${title},
        service_type = ${service_type},
        budget = ${budget},
        description = ${description},
        status = ${status},
        progress_percent = ${progress_percent},
        updated_at = CURRENT_TIMESTAMP
    WHERE id = ${projectId}
    RETURNING *
  `;
  return rows[0];
}

export async function deleteProject(projectId: number) {
  await ensurePortalTablesExist();
  await sql`DELETE FROM portal_projects WHERE id = ${projectId}`;
  return true;
}
