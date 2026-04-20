const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

// Permitem comunicarea cu interfața (frontend-ul)
app.use(cors());
// Permitem serverului să înțeleagă date de tip JSON
app.use(express.json());

// O rută simplă de test
app.get('/api/test', (req, res) => {
  console.log("Cineva a dat refresh la pagină!"); 
  res.json({ mesaj: "Salut! Serverul funcționează perfect!" });
});

// Pornim serverul
app.listen(PORT, () => {
  console.log(`Serverul a pornit cu succes la: http://localhost:${PORT}`);
});