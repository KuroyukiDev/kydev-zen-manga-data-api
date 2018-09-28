const express = require('express');


const port = process.env.PORT || 3000;

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

app.listen(port, () => {
   console.log(`Server is listening on PORT ${port}`);
});