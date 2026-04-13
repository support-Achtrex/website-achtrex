import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 1. Leads Table
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT,
        service VARCHAR(100),
        budget VARCHAR(100),
        company VARCHAR(255),
        source VARCHAR(100),
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // 2. Add missing columns (Safe migration)
    try {
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS service VARCHAR(100)`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS phone VARCHAR(50)`;
    } catch (e) {
      // Ignore if error
    }

    // 3. Team Members
    await sql`
      CREATE TABLE IF NOT EXISTS team_members (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL,
        image VARCHAR(255),
        bio TEXT,
        linkedin VARCHAR(255),
        twitter VARCHAR(255),
        email VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // 4. Subscribers
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // 4b. Ensure subscriber columns exist
    try {
      await sql`ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS name VARCHAR(255)`;
      await sql`ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS company VARCHAR(255)`;
    } catch (e) {
      console.warn("Could not add subscriber columns:", e);
    }

    // 5. Client Notes
    await sql`
      CREATE TABLE IF NOT EXISTS client_notes (
        id SERIAL PRIMARY KEY,
        subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
        content TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // 6. Payments
    await sql`
      CREATE TABLE IF NOT EXISTS client_payments (
        id SERIAL PRIMARY KEY,
        subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
        amount DECIMAL(10, 2) NOT NULL,
        currency VARCHAR(3) DEFAULT 'USD',
        description VARCHAR(255),
        status VARCHAR(50) DEFAULT 'pending', -- pending, paid
        invoice_number VARCHAR(50),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // 7. Client Files
    await sql`
      CREATE TABLE IF NOT EXISTS client_files (
        id SERIAL PRIMARY KEY,
        subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
        file_name VARCHAR(255) NOT NULL,
        file_url TEXT NOT NULL,
        file_size INTEGER,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // 8. Project Progress
    await sql`
      CREATE TABLE IF NOT EXISTS project_progress (
        id SERIAL PRIMARY KEY,
        subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
        milestone VARCHAR(255) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending', -- pending, in-progress, completed
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // 7. Initial Data (Team)
    await sql`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM team_members) THEN
          INSERT INTO team_members (name, role, image, bio, email, linkedin, twitter) VALUES
          ('Achim Godwin Tetteh', 'Operations Project Manager', '/team/achim_real.jpg', 'Leading the vision and operations at Achtrex, driving innovation in digital product development.', 'achim@achtrex.com', '#', '#'),
          ('Dr. Emmanuella Yeboah-Appiah', 'CFO', '/team/emmanuella_v2.jpg', 'Steering the financial strategy and ensuring sustainable growth for our global operations.', 'emmanuella@achtrex.com', '#', '#'),
          ('Kojo Thompson', 'SEO & ASO', '/team/kojo_real.png', 'Optimizing digital presence and driving organic growth through advanced search strategies.', 'kojo@achtrex.com', '#', '#'),
          ('Junior Achim', 'Business Analyst and QA', '/team/junior_real.jpg', 'Ensuring product quality and aligning business strategies with technical execution.', 'junior@achtrex.com', '#', '#'),
          ('Rashid Ahmed', 'Backend Developer', '/team/rashid.png', 'Architecting scalable server-side solutions and robust APIs that power our high-performance applications.', 'rashid@achtrex.com', '#', '#'),
          ('Kelvin Davis', 'Software Engineer', '/team/kelvin-davis.png', 'Building robust, scalable software solutions with a focus on code quality and performance optimization.', 'kelvin@achtrex.com', '#', '#'),
          ('Dede Davis', 'DevOps Engineer', '/team/dede_v2.jpg', 'Streamlining deployment pipelines and ensuring maximum system reliability and uptime.', 'dede@achtrex.com', '#', '#');
        END IF;
      END $$;
    `;

    // 8. Fix existing data: Ensure Achim's role is correct
    await sql`
        UPDATE team_members
        SET role = 'Operations Project Manager'
        WHERE email = 'achim@achtrex.com';
    `;

    return NextResponse.json({ message: 'Database Initialized Successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
