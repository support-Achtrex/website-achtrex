const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function main() {
    console.log("Initializing Railway DB schema...");
    const client = new Client({ 
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    try {
        await client.connect();
        
        // Create subscribers
        await client.query(`
            CREATE TABLE IF NOT EXISTS subscribers (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                name VARCHAR(255),
                company VARCHAR(255),
                subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Created/Verified subscribers table.");

        // Create leads
        await client.query(`
            CREATE TABLE IF NOT EXISTS leads (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                company VARCHAR(255),
                message TEXT,
                service VARCHAR(255),
                budget VARCHAR(255),
                source VARCHAR(255),
                status VARCHAR(50) DEFAULT 'new',
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                phone VARCHAR(50)
            );
        `);
        console.log("Created/Verified leads table.");

        // Create client_files
        await client.query(`
            CREATE TABLE IF NOT EXISTS client_files (
                id SERIAL PRIMARY KEY,
                subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
                file_name VARCHAR(255) NOT NULL,
                file_url TEXT NOT NULL,
                file_size INTEGER,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Created/Verified client_files table.");

        // Create project_progress
        await client.query(`
            CREATE TABLE IF NOT EXISTS project_progress (
                id SERIAL PRIMARY KEY,
                subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
                milestone VARCHAR(255) NOT NULL,
                status VARCHAR(50) DEFAULT 'pending',
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Created/Verified project_progress table.");

        // Create client_payments
        await client.query(`
            CREATE TABLE IF NOT EXISTS client_payments (
                id SERIAL PRIMARY KEY,
                subscriber_id INTEGER REFERENCES subscribers(id) ON DELETE CASCADE,
                amount DECIMAL(10,2) NOT NULL,
                currency VARCHAR(3) DEFAULT 'USD',
                status VARCHAR(50) DEFAULT 'pending',
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Created/Verified client_payments table.");

        console.log("Database initialization successful.");
        await client.end();
    } catch (e) {
        console.error("Initialization failed:", e);
    }
}

main();
