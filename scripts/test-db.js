const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const connectionString = process.env.DATABASE_URL;
console.log('Testing DB connection to:', connectionString ? connectionString.split('@')[1] : 'NONE');

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 5000,
});

(async () => {
  try {
    const res = await pool.query('SELECT 1 as val');
    console.log('DB SUCCESS:', res.rows);
  } catch (err) {
    console.log('DB FAILED:', err.message, err.code);
  } finally {
    await pool.end();
  }
})();
