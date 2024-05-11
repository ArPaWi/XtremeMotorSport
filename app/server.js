const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Gunakan middleware cors
app.use(cors());

// Konfigurasi koneksi MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan username MySQL Anda
  password: 'Admin123@08', // Ganti dengan password MySQL Anda
  database: 'xtrememotorsport', // Ganti dengan nama database yang telah Anda buat
  port: '3308', // Port MySQL Anda
});

// Tes koneksi database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
  } else {
    console.log('Connected to MySQL database...');
  }
});

// Middleware untuk memproses body request JSON
app.use(express.json());

// Endpoint untuk menyimpan respons dari responden
app.post('/api/responses', (req, res) => {
    const { nama, motor, nomor, mekanik, sk1, sk2, sk3, sk4, sk5, sk6, saran } = req.body;
  
    const responses = JSON.stringify({
      nama,
      motor,
      nomor,
      mekanik,
      skor: { sk1, sk2, sk3, sk4, sk5, sk6 },
      saran
    });
  
    const sql = 'INSERT INTO responses (responses) VALUES (?)';
    db.query(sql, [responses], (err, result) => {
      if (err) {
        console.error('Error executing MySQL query: ', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log('Response added successfully.');
        res.status(200).json({ message: 'Response added successfully.' });
      }
    });
});  

// Port server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));