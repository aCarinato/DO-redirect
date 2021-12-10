const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Proviamo il redirect!</h1>');
});

app.listen(8000, () => {
  console.log('app listening on port 5000');
});
