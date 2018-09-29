const express = require('express');
const port = process.env.PORT || 3000;

const mangalib = require('./manga-library');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/datetime', (req, res) => {
   res.send({
      date: {
          month: 09,
          day: 28,
          year: 2018
      },
       time: {
          hrs: 2,
          mins: 35,
          secs: 17
       }
   });
});

app.get('/tomochanwaonnanoko', (req, res) => {
    res.send(mangalib.tomochanWaOnnanoko);
});

app.listen(port, () => {
   console.log(`Server is listening on PORT ${port}`);
});