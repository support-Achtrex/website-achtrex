const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function main() {
    console.log("Testing Railway DB with pg library...");
    const client = new Client({ 
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    try {
        await client.connect();
        const result = await client.query('SELECT 1 as one;');
        console.log("Connection successful:", result.rows);
        await client.end();
    } catch (e) {
        console.error("Connection failed:", e);
    }
}

main();
