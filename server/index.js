const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5001;
const db = new Database('management.db');

app.use(cors());
app.use(express.json());


app.get('/api/test', (req, res) => {
    res.json({ mesaj: "Conexiune excelentă! Serverul este online." });
  });

if (!fs.existsSync('./uploads')) fs.mkdirSync('./uploads');
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => {
    const unic = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unic + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

db.exec(`
  CREATE TABLE IF NOT EXISTS apartamente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    numar TEXT NOT NULL,
    etaj INTEGER,
    scara TEXT,
    status TEXT DEFAULT 'liber'
  );

  CREATE TABLE IF NOT EXISTS chiriasi (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nume TEXT NOT NULL,
    email TEXT,
    telefon TEXT,
    apartament_id INTEGER,
    apartament_numar TEXT
  );

  CREATE TABLE IF NOT EXISTS facturi (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chirias_id INTEGER,
    suma REAL NOT NULL,
    tip TEXT NOT NULL,
    data_emiterii TEXT NOT NULL,
    data_scadentei TEXT NOT NULL,
    status TEXT DEFAULT 'Neplătită'
  );

  CREATE TABLE IF NOT EXISTS mentenanta (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titlu TEXT NOT NULL,
    descriere TEXT,
    chirias_id INTEGER,
    apartament_id INTEGER,
    poza TEXT,
    status TEXT DEFAULT 'Nouă',
    data_raportarii TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS documente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nume_fisier TEXT NOT NULL,
    tip TEXT NOT NULL,
    cale TEXT NOT NULL,
    chirias_id INTEGER,
    data_upload TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS mesaje_contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nume TEXT NOT NULL,
    email TEXT NOT NULL,
    subiect TEXT,
    mesaj TEXT NOT NULL,
    data_trimiterii TEXT DEFAULT (datetime('now'))
  );
`);

// CHIRIASI
app.get('/api/chiriasi', (req, res) => {
  try {
    const chiriasi = db.prepare('SELECT * FROM chiriasi').all();
    res.json(chiriasi);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/chiriasi', (req, res) => {
    try {
      // Acum serverul caută EXACT cuvântul "apartament_numar" pe care îl trimite formularul
      const { nume, email, telefon, apartament_numar } = req.body;
  
      const r = db.prepare(
        'INSERT INTO chiriasi (nume, email, telefon, apartament_numar) VALUES (?, ?, ?, ?)'
      ).run(nume || '', email || '', telefon || '', apartament_numar || '');
      
      res.json({ success: true, id: r.lastInsertRowid });
    } catch (err) {
      console.error("Eroare la salvare:", err);
      res.status(500).json({ error: err.message });
    }
  });

// Ruta pentru a șterge un chiriaș
app.delete('/api/chiriasi/:id', (req, res) => {
    try {
      const info = db.prepare('DELETE FROM chiriasi WHERE id = ?').run(req.params.id);
      
      if (info.changes > 0) {
        console.log(`🗑️ Chiriașul cu ID-ul ${req.params.id} a fost șters.`);
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'Chiriașul nu a fost găsit.' });
      }
    } catch (err) {
      console.error("Eroare la ștergerea chiriașului:", err);
      res.status(500).json({ error: err.message });
    }
  });

// APARTAMENTE
app.get('/api/apartamente', (req, res) => {
  res.json(db.prepare('SELECT * FROM apartamente').all());
});

app.post('/api/apartamente', (req, res) => {
  const { numar, etaj, scara, status } = req.body;
  const r = db.prepare(
    'INSERT INTO apartamente (numar, etaj, scara, status) VALUES (?, ?, ?, ?)'
  ).run(numar, etaj, scara, status || 'liber');
  res.json({ success: true, id: r.lastInsertRowid });
});

app.delete('/api/apartamente/:id', (req, res) => {
  db.prepare('DELETE FROM apartamente WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// FACTURI
app.get('/api/facturi', (req, res) => {
  res.json(db.prepare('SELECT * FROM facturi').all());
});

app.post('/api/facturi', (req, res) => {
  const { chirias_id, suma, tip, data_emiterii, data_scadentei, status } = req.body;
  const r = db.prepare(
    'INSERT INTO facturi (chirias_id, suma, tip, data_emiterii, data_scadentei, status) VALUES (?, ?, ?, ?, ?, ?)'
  ).run(chirias_id, suma, tip, data_emiterii, data_scadentei, status || 'Neplătită');
  res.json({ success: true, id: r.lastInsertRowid });
});

app.patch('/api/facturi/:id/status', (req, res) => {
  db.prepare('UPDATE facturi SET status = ? WHERE id = ?').run(req.body.status, req.params.id);
  res.json({ success: true });
});

app.delete('/api/facturi/:id', (req, res) => {
  db.prepare('DELETE FROM facturi WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// MENTENANTA
app.get('/api/mentenanta', (req, res) => {
  res.json(db.prepare('SELECT * FROM mentenanta').all());
});

app.post('/api/mentenanta', upload.single('poza'), (req, res) => {
  const { titlu, descriere, chirias_id, apartament_id, status } = req.body;
  const poza = req.file ? `/uploads/${req.file.filename}` : null;
  const r = db.prepare(
    'INSERT INTO mentenanta (titlu, descriere, chirias_id, apartament_id, poza, status) VALUES (?, ?, ?, ?, ?, ?)'
  ).run(titlu, descriere, chirias_id, apartament_id, poza, status || 'Nouă');
  res.json({ success: true, id: r.lastInsertRowid });
});

app.patch('/api/mentenanta/:id/status', (req, res) => {
  db.prepare('UPDATE mentenanta SET status = ? WHERE id = ?').run(req.body.status, req.params.id);
  res.json({ success: true });
});

// DOCUMENTE
app.get('/api/documente', (req, res) => {
  res.json(db.prepare('SELECT * FROM documente').all());
});

app.post('/api/documente', upload.single('fisier'), (req, res) => {
  const { tip, chirias_id } = req.body;
  if (!req.file) return res.status(400).json({ error: 'Niciun fișier primit' });
  const r = db.prepare(
    'INSERT INTO documente (nume_fisier, tip, cale, chirias_id) VALUES (?, ?, ?, ?)'
  ).run(req.file.originalname, tip, `/uploads/${req.file.filename}`, chirias_id);
  res.json({ success: true, id: r.lastInsertRowid });
});

app.delete('/api/documente/:id', (req, res) => {
  const doc = db.prepare('SELECT * FROM documente WHERE id = ?').get(req.params.id);
  if (doc) {
    const filePath = '.' + doc.cale;
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    db.prepare('DELETE FROM documente WHERE id = ?').run(req.params.id);
  }
  res.json({ success: true });
});

// CONTACT
app.get('/api/contact', (req, res) => {
  res.json(db.prepare('SELECT * FROM mesaje_contact ORDER BY id DESC').all());
});

app.post('/api/contact', (req, res) => {
  const { nume, email, subiect, mesaj } = req.body;
  if (!nume || !email || !mesaj) {
    return res.status(400).json({ error: 'Câmpurile nume, email și mesaj sunt obligatorii' });
  }
  const r = db.prepare(
    'INSERT INTO mesaje_contact (nume, email, subiect, mesaj) VALUES (?, ?, ?, ?)'
  ).run(nume, email, subiect, mesaj);
  res.json({ success: true, id: r.lastInsertRowid });
});

app.listen(PORT, () => {
  console.log(`Server pornit pe http://localhost:${PORT}`);
});
