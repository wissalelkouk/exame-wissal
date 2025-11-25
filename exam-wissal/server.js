const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const postList = [
  { id: '1', titre: 'Premier post', contenu: 'détails premier post' },
  { id: '2', titre: 'Deuxième post', contenu: 'détails deuxième post' },
  { id: '3', titre: 'Troisième post', contenu: 'détails troisième post' },
];

app.get('/postList', (req, res) => {
  res.json(postList);
});

app.use(express.static(path.join(__dirname, 'backend', 'www')));
app.use((req, res) => {
  const indexPath = path.join(__dirname, 'backend', 'www', 'index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
