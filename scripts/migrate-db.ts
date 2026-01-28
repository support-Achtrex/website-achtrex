
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { sql } from '@vercel/postgres';

async function main() {
    console.log("Checking and updating database schema for currency...");
    try {
        await sql`ALTER TABLE client_payments ADD COLUMN IF NOT EXISTS currency VARCHAR(3) DEFAULT 'USD';`;
        console.log("Added column 'currency' to client_payments (if it didn't exist).");

        console.log("Migration successful.");
    } catch (e) {
        console.error("Migration failed:", e);
    }
}

main();
