
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { sql } from '@vercel/postgres';

async function migrate() {
    console.log('Starting migration...');
    try {
        // 1. Add columns to team_members if they don't exist
        await sql`
            ALTER TABLE team_members 
            ADD COLUMN IF NOT EXISTS salary NUMERIC,
            ADD COLUMN IF NOT EXISTS bank_details TEXT,
            ADD COLUMN IF NOT EXISTS start_date DATE;
        `;
        console.log('Added columns to team_members');

        // 2. Create payroll_records table
        await sql`
            CREATE TABLE IF NOT EXISTS payroll_records (
                id SERIAL PRIMARY KEY,
                team_member_id INTEGER REFERENCES team_members(id) ON DELETE CASCADE,
                amount NUMERIC NOT NULL,
                payment_date DATE NOT NULL,
                status VARCHAR(50) DEFAULT 'paid',
                created_at TIMESTAMP DEFAULT NOW()
            );
        `;
        console.log('Created payroll_records table');

        console.log('Migration completed successfully.');
    } catch (error) {
        console.error('Migration failed:', error);
    }
}

migrate();
