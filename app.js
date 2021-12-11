const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Proviamo il redirect! Chi lo sa... Peró cosí no se pol</h1>');
});

app.get('/prova', (req, res) => {
  res.send('<h1>Proviamo il redirect su pagina prova!</h1>');
});

app.listen(8000, () => {
  console.log('app listening on port 8000');
});
