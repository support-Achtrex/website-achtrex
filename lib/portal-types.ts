export interface PortalMember {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  company?: string;
  phone?: string;
  role: string;
  created_at: string;
}

export interface ProjectUpdate {
  id: number;
  project_id: number;
  title: string;
  content: string;
  stage: string;
  author_name: string;
  created_at: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  category: 'frontend' | 'gateway' | 'service' | 'ai' | 'database' | 'cloud' | 'pipeline';
  status: 'active' | 'in_progress' | 'planned';
  description: string;
  specs?: string;
  connections: string[];
}

export interface ScopeCartItem {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'included' | 'in_review' | 'addon_requested' | 'completed';
  estimatedCost?: string;
  estimatedTimeline?: string;
}

export interface PortalProject {
  id: number;
  member_id: number;
  title: string;
  service_type: string;
  description: string;
  budget?: string;
  status: 'submitted' | 'reviewing' | 'architecture_design' | 'in_development' | 'testing' | 'completed';
  progress_percent: number;
  architecture_data: {
    nodes: ArchitectureNode[];
    overview?: string;
  };
  cart_items: ScopeCartItem[];
  created_at: string;
  updated_at: string;
  member_name?: string;
  member_email?: string;
  member_company?: string;
  member_phone?: string;
}

export const DEFAULT_ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'client-apps',
    label: 'Client Web & Mobile Apps',
    category: 'frontend',
    status: 'active',
    description: 'Next.js 15 & React Native interfaces with sub-100ms render speeds',
    specs: 'Next.js 15 App Router, Tailwind CSS, Framer Motion',
    connections: ['api-gateway']
  },
  {
    id: 'api-gateway',
    label: 'Achtrex Edge API Gateway',
    category: 'gateway',
    status: 'active',
    description: 'Ultra-low latency reverse proxy with rate limiting, SSL, and telemetry authentication',
    specs: 'Cloudflare / Edge Layer, JWT Token Validation, Rate Limiter',
    connections: ['automotive-engine', 'ai-agent-engine', 'auth-service']
  },
  {
    id: 'automotive-engine',
    label: 'Automotive Data & VIN Engine',
    category: 'service',
    status: 'in_progress',
    description: 'Real-time vehicle dataset parsing, OEM specs lookup, and market pricing algorithms',
    specs: 'High-throughput Node.js microservices, 50,000+ RPS capacity',
    connections: ['postgres-db', 'redis-cache']
  },
  {
    id: 'ai-agent-engine',
    label: 'AI Dealership & Chat Assistant',
    category: 'ai',
    status: 'in_progress',
    description: 'Fine-tuned LLM agents for automated quote generation and customer sales workflows',
    specs: 'RAG Pipeline, Vector Embeddings, Structured JSON output',
    connections: ['postgres-db']
  },
  {
    id: 'auth-service',
    label: 'Identity & Access Control',
    category: 'service',
    status: 'active',
    description: 'Multi-tenant enterprise access control with role-based permissions and MFA',
    specs: 'OAuth2, PBKDF2 Session Tokens, Role Hierarchy',
    connections: ['postgres-db']
  },
  {
    id: 'postgres-db',
    label: 'Primary PostgreSQL Database',
    category: 'database',
    status: 'active',
    description: 'High-availability relational database cluster with point-in-time recovery and SSL',
    specs: 'PostgreSQL 16, Connection Pooling, Automated Daily Backups',
    connections: []
  },
  {
    id: 'redis-cache',
    label: 'Redis Ultra-Fast Memory Cache',
    category: 'database',
    status: 'active',
    description: 'In-memory caching for real-time inventory queries and live session states',
    specs: 'Redis 7.2 Cluster, Sub-5ms Key-Value Retrieval',
    connections: []
  },
  {
    id: 'cloud-infra',
    label: 'Kubernetes & Edge Cloud Infrastructure',
    category: 'cloud',
    status: 'active',
    description: 'Multi-region auto-scaling containers with 99.99% uptime guarantee and DDoS shield',
    specs: 'Automated CI/CD, Containerized Orchestration, Global Edge CDN',
    connections: ['api-gateway', 'postgres-db']
  }
];

export const DEFAULT_CART_ITEMS: ScopeCartItem[] = [
  {
    id: 'core-platform',
    name: 'Core Platform Engine & API Architecture',
    category: 'Core System',
    description: 'Full-stack responsive web application, scalable backend APIs, and database provisioning',
    status: 'included',
    estimatedCost: 'Included in Base',
    estimatedTimeline: 'Weeks 1-3'
  },
  {
    id: 'auto-data-module',
    name: 'Automotive Data & Inventory Integration',
    category: 'Data & APIs',
    description: 'Live VIN decoding, dealer inventory synchronization, and vehicle specs data feeds',
    status: 'included',
    estimatedCost: 'Included in Base',
    estimatedTimeline: 'Weeks 3-4'
  },
  {
    id: 'ai-assistant-addon',
    name: 'AI Smart Assistant & Lead Automation',
    category: 'AI & Automation',
    description: 'Conversational AI engine for customer inquiries, automated booking, and smart recommendations',
    status: 'included',
    estimatedCost: 'Included in Scope',
    estimatedTimeline: 'Weeks 4-5'
  },
  {
    id: 'security-sla-module',
    name: 'Enterprise Security, SSL & SLA Monitoring',
    category: 'Infrastructure',
    description: '99.99% high availability, end-to-end encryption, automated backups, and 24/7 uptime healthcheck',
    status: 'included',
    estimatedCost: 'Included in Scope',
    estimatedTimeline: 'Week 5'
  }
];

export const AVAILABLE_ADDONS: ScopeCartItem[] = [
  {
    id: 'addon-mobile-native',
    name: 'Native iOS & Android Mobile App Client',
    category: 'Mobile Platform',
    description: 'React Native / Expo mobile app package published to App Store & Google Play',
    status: 'addon_requested',
    estimatedCost: '$2,500',
    estimatedTimeline: '+2 Weeks'
  },
  {
    id: 'addon-fleet-telematics',
    name: 'Real-Time GPS & Fleet Telematics Feed',
    category: 'IoT & Telematics',
    description: 'High-frequency MQTT telemetry ingestion for vehicle speed, fuel, and geofencing',
    status: 'addon_requested',
    estimatedCost: '$1,800',
    estimatedTimeline: '+1.5 Weeks'
  },
  {
    id: 'addon-sso-saml',
    name: 'Enterprise SAML 2.0 / Okta SSO Integration',
    category: 'Enterprise Security',
    description: 'Single Sign-On integration with Okta, Azure AD, and Google Workspace',
    status: 'addon_requested',
    estimatedCost: '$1,200',
    estimatedTimeline: '+1 Week'
  },
  {
    id: 'addon-dedicated-sla',
    name: '24/7 Dedicated DevOps & 99.99% SLA Cloud Hosting',
    category: 'Managed Cloud',
    description: 'Dedicated isolated database instances, multi-region failover, and guaranteed 15-min response SLA',
    status: 'addon_requested',
    estimatedCost: '$950 / mo',
    estimatedTimeline: 'Ongoing'
  }
];
