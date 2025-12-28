import express from 'express';
import mysql from 'mysql2/promise';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database connection pool
const pool = mysql.createPool({
  uri: process.env.MYSQL_URL || 'mysql://root:password@localhost:3306/resume_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// API Endpoint to fetch hobbies
app.get('/api/hobbies', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM hobbies');
    
    // Transform flat rows into categorized structure
    const games = rows.filter(r => r.category === 'game').map(r => ({
      name: r.name,
      info: r.info,
      type: r.type
    }));
    
    const anime = rows.filter(r => r.category === 'anime').map(r => ({
      name: r.name,
      info: r.info,
      type: r.type
    }));

    res.json({ games, anime });
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static files from the 'dist' directory (Frontend build)
// Note: On Zeabur, you should build your frontend into the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing, return all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
