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
// Database connection pool
const pool = mysql.createPool({
  // 优先使用环境变量中的完整 URL
  uri: process.env.MYSQL_URL, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // 增加连接超时处理
  connectTimeout: 10000 
});
// API Endpoint to fetch hobbies
// API Endpoint to fetch hobbies
app.get('/api/hobbies', async (req, res) => {
  try {
    // 建议加上 ORDER BY id DESC 或 created_at，让新录入的内容排在前面
    const [rows] = await pool.query('SELECT * FROM hobbies ORDER BY id ASC');
    
    const games = rows.filter(r => r.category === 'game').map(r => ({
      name: r.name,
      info: r.info,
      type: r.type
    }));
    
    // 你的截图里暂时只看到了 game，如果有 anime 类别也会自动过滤出来
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
