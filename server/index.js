const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001; 

app.use(cors());
app.use(express.json());

// Mesajul de salut
app.get('/api/test', (req, res) => {
  res.json({ mesaj: 'Salut! Serverul funcționează perfect!' });
});

// Aici este lista pe care o caută site-ul și nu o găsea!
const chiriasi = [
  { id: 1, nume: "Ana Popescu", ap: "12", status: "Activ" },
  { id: 2, nume: "Marius Ionescu", ap: "05", status: "Restanță" },
  { id: 3, nume: "Elena Radu", ap: "21", status: "Activ" }
];

// Ruta la care bate site-ul
app.get('/api/chiriasi', (req, res) => {
  res.json(chiriasi);
});

app.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});