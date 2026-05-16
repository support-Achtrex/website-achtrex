import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DATABASE_PUBLIC_URL,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 5000,
    query_timeout: 10000
});

export async function sql(strings: TemplateStringsArray, ...values: any[]) {
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
