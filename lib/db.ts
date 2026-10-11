import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DATABASE_PUBLIC_URL;
const isInternal = Boolean(
  connectionString && (
    connectionString.includes('.internal') || 
    connectionString.includes('railway.internal') ||
    connectionString.includes('localhost') || 
    connectionString.includes('127.0.0.1') ||
    process.env.PGSSLMODE === 'disable'
  )
);

let pool: Pool | null = null;

if (connectionString) {
  pool = new Pool({
    connectionString: connectionString,
    ssl: isInternal ? false : { rejectUnauthorized: false },
    connectionTimeoutMillis: 3500,
    idleTimeoutMillis: 5000,
    max: 10,
    keepAlive: true,
  });

  pool.on('error', (err) => {
    console.warn('PostgreSQL idle client notice:', err.message);
  });
}

export async function sql(strings: TemplateStringsArray, ...values: any[]) {
  if (!pool) {
    console.warn('DATABASE_URL is not configured.');
    return { rows: [] };
  }

  let query = strings[0];
  for (let i = 0; i < values.length; i++) {
    query += `$${i + 1}` + strings[i + 1];
  }
  
  // Enforce a strict 3.5s timeout so requests never hang on dead proxy sockets
  const queryPromise = pool.query(query, values);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Connection terminated due to connection timeout')), 3500)
  );

  return (await Promise.race([queryPromise, timeoutPromise])) as any;
}
