const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/mtw/api/v1/cleanup', (req, res) => {
  const message = "Olá, mundo!";
  res.json({
    text: message,
  });
});

app.post('/interactive', (req, res) => {
    const message = "Olá, mundo!";
    console.log(message)
  });

app.get('/mtw/api/v1', (req, res) => {
    const message = "Olá, mundo!";
    res.json({
      text: message,
    });
  });

app.get('/', (req, res) => {
    const message = "Olá, mundo!";
    res.json({
      text: message,
    });
  });


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
