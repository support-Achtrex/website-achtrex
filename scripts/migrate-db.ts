
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { sql } from '@vercel/postgres';

async function main() {
    console.log("Checking and updating database schema...");
    try {
        // multiple statements might not work in one template tag depending on driver, do one by one.
        await sql`ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS name TEXT;`;
        console.log("Added column 'name' to subscribers (if it didn't exist).");

        await sql`ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS company TEXT;`;
        console.log("Added column 'company' to subscribers (if it didn't exist).");

        console.log("Migration successful.");
    } catch (e) {
        console.error("Migration failed:", e);
    }
}

main();
