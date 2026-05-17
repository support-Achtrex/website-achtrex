import { sql } from '../lib/db.js';

async function main() {
    try {
        console.log('Checking client_payments table...');
        const res = await sql`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'client_payments'`;
        console.log('client_payments columns:', res.rows);
        
        const countRes = await sql`SELECT COUNT(*) FROM client_payments`;
        console.log('client_payments count:', countRes.rows[0]);
        
        const sample = await sql`SELECT * FROM client_payments LIMIT 1`;
        console.log('Sample row:', sample.rows[0]);
    } catch (e: any) {
        console.error('Error checking table:', e.message);
    }
}

main();
