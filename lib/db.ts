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

const pool = new Pool({
  connectionString: connectionString,
  ssl: (isInternal || !connectionString) ? false : { rejectUnauthorized: false },
  connectionTimeoutMillis: 10000,
  query_timeout: 15000,
  max: 20
});

export async function sql(strings: TemplateStringsArray, ...values: any[]) {
  if (!connectionString) {
    console.warn('DATABASE_URL is not configured.');
    return { rows: [] };
  }

  let query = strings[0];
  for (let i = 0; i < values.length; i++) {
    query += `$${i + 1}` + strings[i + 1];
  }
  
  try {
    return await pool.query(query, values);
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}
