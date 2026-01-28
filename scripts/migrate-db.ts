
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { sql } from '@vercel/postgres';

async function main() {
    console.log("Checking and updating database schema for currency...");
    try {
        await sql`ALTER TABLE client_payments ADD COLUMN IF NOT EXISTS currency VARCHAR(3) DEFAULT 'USD';`;
        console.log("Added column 'currency' to client_payments (if it didn't exist).");

        await sql`ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS name VARCHAR(255);`;
        await sql`ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS company VARCHAR(255);`;
        console.log("Added columns 'name' and 'company' to subscribers (if they didn't exist).");

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
        console.log("Ensured client_files table exists.");

        await sql`
          CREATE TABLE IF NOT EXISTS project_progress (
            id SERIAL PRIMARY KEY,
            subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
            milestone VARCHAR(255) NOT NULL,
            status VARCHAR(50) DEFAULT 'pending',
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          )
        `;
        console.log("Ensured project_progress table exists.");

        console.log("Migration successful.");
    } catch (e) {
        console.error("Migration failed:", e);
    }
}

main();
