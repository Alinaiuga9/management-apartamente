const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
const PORT = 5001;
const db = new Database('management.db');

app.use(cors());
app.use(express.json());

// Creează tabelele dacă nu există
db.exec(`
  CREATE TABLE IF NOT EXISTS chiriasi (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nume TEXT NOT NULL,
    prenume TEXT NOT NULL,
    telefon TEXT,
    email TEXT,
    apartament TEXT,
    status TEXT DEFAULT 'Activ'
  );

  CREATE TABLE IF NOT EXISTS apartamente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    adresa TEXT NOT NULL,
    pret REAL,
    status TEXT DEFAULT 'disponibil'
  );
`);

// GET toți chiriașii
app.get('/api/chiriasi', (req, res) => {
  const chiriasi = db.prepare('SELECT * FROM chiriasi').all();
  res.json(chiriasi);
});

// POST chiriaș nou
app.post('/api/chiriasi', (req, res) => {
  const { nume, prenume, telefon, email, apartament, status } = req.body;
  const stmt = db.prepare(
    'INSERT INTO chiriasi (nume, prenume, telefon, email, apartament, status) VALUES (?, ?, ?, ?, ?, ?)'
  );
  const result = stmt.run(nume, prenume, telefon, email, apartament, status || 'Activ');
  res.json({ success: true, id: result.lastInsertRowid });
});

// DELETE chiriaș
app.delete('/api/chiriasi/:id', (req, res) => {
  db.prepare('DELETE FROM chiriasi WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// GET toate apartamentele
app.get('/api/apartamente', (req, res) => {
  const apartamente = db.prepare('SELECT * FROM apartamente').all();
  res.json(apartamente);
});

// POST apartament nou
app.post('/api/apartamente', (req, res) => {
  const { adresa, pret, status } = req.body;
  const result = db.prepare(
    'INSERT INTO apartamente (adresa, pret, status) VALUES (?, ?, ?)'
  ).run(adresa, pret, status || 'disponibil');
  res.json({ success: true, id: result.lastInsertRowid });
});

app.listen(PORT, () => {
  console.log(`Server pornit pe http://localhost:${PORT}`);
});
