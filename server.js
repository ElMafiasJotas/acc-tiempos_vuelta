
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

const dataFile = path.join(__dirname, 'data.json');

app.get('/api/data', (req, res) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error al leer datos');
    res.send(data);
  });
});

app.post('/api/data', (req, res) => {
  fs.writeFile(dataFile, JSON.stringify(req.body, null, 2), err => {
    if (err) return res.status(500).send('Error al guardar datos');
    res.send({ status: 'ok' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
