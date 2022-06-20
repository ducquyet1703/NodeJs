// import { engine } from 'express-handlebars';

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000

// HTTP Logger
app.use(morgan('combined'))

// Template Engine
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
   return res.send(`
      <h1>Hello Word</h1>
   `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})