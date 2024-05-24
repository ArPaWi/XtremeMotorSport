const express = require('express');
const mysql = require('mysql2/promise'); // Menggunakan versi promise dari mysql2
const cors = require('cors');

const app = express();

// Gunakan middleware cors
app.use(cors());

// Fungsi untuk menginisialisasi koneksi database
async function initializeDB() {
  try {
    // Konfigurasi koneksi MySQL
    const db = await mysql.createConnection({
      host: 'localhost',
      user: 'root', // Ganti dengan username MySQL Anda
      password: 'Admin123@08', // Ganti dengan password MySQL Anda
      database: 'xtrememotorsport', // Ganti dengan nama database yang telah Anda buat
      port: '3308', // Port MySQL Anda
    });
    console.log('Connected to MySQL database...');
    return db;
  } catch (error) {
    console.error('Error connecting to MySQL database: ', error);
    throw error;
  }
}

// Inisialisasi koneksi database
initializeDB().then(db => {
  // Middleware untuk memproses body request JSON
  app.use(express.json());

  // Endpoint untuk menyimpan respons dari responden
  app.post('/api/responses', async (req, res) => {
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
    try {
      await db.query(sql, [responses]);
      console.log('Response added successfully.');
      res.status(200).json({ message: 'Response added successfully.' });
    } catch (err) {
      console.error('Error executing MySQL query: ', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //Endpoint untuk mendapatkan jumlah responden atau kustomer
  app.get('/api/jumlah_responden', async (req, res) => {
    try {
      const [rows] = await db.execute('SELECT COUNT(*) AS jml_responden FROM responses');
      const jml_responden = rows[0].jml_responden;
      res.json({ jml_responden });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Endpoint Data Nama, Motor, Nomor, Saran
  app.get('/api/data', async (req, res) => {
    try {
      const [rows] = await db.execute(
        "SELECT responses->>'$.nama' AS Nama, responses->>'$.motor' AS Motor, responses->>'$.nomor' AS Nomor, responses->>'$.saran' AS Saran FROM responses"
      );
      res.json(rows);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Endpoint Mekanik untuk menampilkan data mekanik
  app.get('/api/mekanik', async (req, res) => {
    try {
      // Query untuk mengambil data dari database
      const [rows] = await db.query(`
        SELECT 
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.mekanik'='1') as jml_responden_mekanik_1,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.mekanik'='2') as jml_responden_mekanik_2,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.mekanik'='3') as jml_responden_mekanik_3,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.mekanik'='4') as jml_responden_mekanik_4,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.mekanik'='5') as jml_responden_mekanik_5,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.mekanik'='6') as jml_responden_mekanik_6,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.mekanik'='7') as jml_responden_mekanik_7,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.mekanik'='8') as jml_responden_mekanik_8,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.mekanik'='9') as jml_responden_mekanik_9
      `);
  
      // Gabungkan data menjadi satu objek
      const responseData = {
        jml_responden_mekanik_1: rows[0].jml_responden_mekanik_1,
        jml_responden_mekanik_2: rows[0].jml_responden_mekanik_2,
        jml_responden_mekanik_3: rows[0].jml_responden_mekanik_3,
        jml_responden_mekanik_4: rows[0].jml_responden_mekanik_4,
        jml_responden_mekanik_5: rows[0].jml_responden_mekanik_5,
        jml_responden_mekanik_6: rows[0].jml_responden_mekanik_6,
        jml_responden_mekanik_7: rows[0].jml_responden_mekanik_7,
        jml_responden_mekanik_8: rows[0].jml_responden_mekanik_8,
        jml_responden_mekanik_9: rows[0].jml_responden_mekanik_9
      };
  
      res.json(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Endpoint SK1 untuk menampilkan data pada sk1
  app.get('/api/sk1', async (req, res) => {
    try {
      // Query untuk mengambil data dari database
      const [rows] = await db.query(`
        SELECT 
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk1'='1') as jml_responden_skor_1,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk1'='2') as jml_responden_skor_2,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk1'='3') as jml_responden_skor_3,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk1'='4') as jml_responden_skor_4,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk1'='5') as jml_responden_skor_5
      `);
  
      // Gabungkan data menjadi satu objek
      const responseData = {
        jml_responden_skor_1: rows[0].jml_responden_skor_1,
        jml_responden_skor_2: rows[0].jml_responden_skor_2,
        jml_responden_skor_3: rows[0].jml_responden_skor_3,
        jml_responden_skor_4: rows[0].jml_responden_skor_4,
        jml_responden_skor_5: rows[0].jml_responden_skor_5
      };
  
      res.json(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Endpoint SK2 untuk menampilkan data pada sk2
  app.get('/api/sk2', async (req, res) => {
    try {
      // Query untuk mengambil data dari database
      const [rows] = await db.query(`
        SELECT 
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk2'='1') as jml_responden_skor_1,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk2'='2') as jml_responden_skor_2,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk2'='3') as jml_responden_skor_3,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk2'='4') as jml_responden_skor_4,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk2'='5') as jml_responden_skor_5
      `);
  
      // Gabungkan data menjadi satu objek
      const responseData = {
        jml_responden_skor_1: rows[0].jml_responden_skor_1,
        jml_responden_skor_2: rows[0].jml_responden_skor_2,
        jml_responden_skor_3: rows[0].jml_responden_skor_3,
        jml_responden_skor_4: rows[0].jml_responden_skor_4,
        jml_responden_skor_5: rows[0].jml_responden_skor_5
      };
  
      res.json(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Endpoint SK3 untuk menampilkan data pada sk3
  app.get('/api/sk3', async (req, res) => {
    try {
      // Query untuk mengambil data dari database
      const [rows] = await db.query(`
        SELECT 
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk3'='1') as jml_responden_skor_1,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk3'='2') as jml_responden_skor_2,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk3'='3') as jml_responden_skor_3,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk3'='4') as jml_responden_skor_4,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk3'='5') as jml_responden_skor_5
      `);
  
      // Gabungkan data menjadi satu objek
      const responseData = {
        jml_responden_skor_1: rows[0].jml_responden_skor_1,
        jml_responden_skor_2: rows[0].jml_responden_skor_2,
        jml_responden_skor_3: rows[0].jml_responden_skor_3,
        jml_responden_skor_4: rows[0].jml_responden_skor_4,
        jml_responden_skor_5: rows[0].jml_responden_skor_5
      };
  
      res.json(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Endpoint SK4 untuk menampilkan data pada sk4
  app.get('/api/sk4', async (req, res) => {
    try {
      // Query untuk mengambil data dari database
      const [rows] = await db.query(`
        SELECT 
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk4'='1') as jml_responden_skor_1,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk4'='2') as jml_responden_skor_2,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk4'='3') as jml_responden_skor_3,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk4'='4') as jml_responden_skor_4,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk4'='5') as jml_responden_skor_5
      `);
  
      // Gabungkan data menjadi satu objek
      const responseData = {
        jml_responden_skor_1: rows[0].jml_responden_skor_1,
        jml_responden_skor_2: rows[0].jml_responden_skor_2,
        jml_responden_skor_3: rows[0].jml_responden_skor_3,
        jml_responden_skor_4: rows[0].jml_responden_skor_4,
        jml_responden_skor_5: rows[0].jml_responden_skor_5
      };
  
      res.json(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Endpoint SK5 untuk menampilkan data pada sk5
  app.get('/api/sk5', async (req, res) => {
    try {
      // Query untuk mengambil data dari database
      const [rows] = await db.query(`
        SELECT 
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk5'='1') as jml_responden_skor_1,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk5'='2') as jml_responden_skor_2,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk5'='3') as jml_responden_skor_3,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk5'='4') as jml_responden_skor_4,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk5'='5') as jml_responden_skor_5
      `);
  
      // Gabungkan data menjadi satu objek
      const responseData = {
        jml_responden_skor_1: rows[0].jml_responden_skor_1,
        jml_responden_skor_2: rows[0].jml_responden_skor_2,
        jml_responden_skor_3: rows[0].jml_responden_skor_3,
        jml_responden_skor_4: rows[0].jml_responden_skor_4,
        jml_responden_skor_5: rows[0].jml_responden_skor_5
      };
  
      res.json(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Endpoint SK6 untuk menampilkan data pada sk6
  app.get('/api/sk6', async (req, res) => {
    try {
      // Query untuk mengambil data dari database
      const [rows] = await db.query(`
        SELECT 
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk6'='1') as jml_responden_skor_1,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk6'='2') as jml_responden_skor_2,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk6'='3') as jml_responden_skor_3,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk6'='4') as jml_responden_skor_4,
          (SELECT COUNT(*) FROM responses WHERE responses->>'$.skor.sk6'='5') as jml_responden_skor_5
      `);
  
      // Gabungkan data menjadi satu objek
      const responseData = {
        jml_responden_skor_1: rows[0].jml_responden_skor_1,
        jml_responden_skor_2: rows[0].jml_responden_skor_2,
        jml_responden_skor_3: rows[0].jml_responden_skor_3,
        jml_responden_skor_4: rows[0].jml_responden_skor_4,
        jml_responden_skor_5: rows[0].jml_responden_skor_5
      };
  
      res.json(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Port server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
  console.error('Error initializing database:', error);
});