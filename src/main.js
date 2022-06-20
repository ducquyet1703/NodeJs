import { engine, create, ExpressHandlebars } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';


const app = express();
const port = 3000


// HTTP Logger
app.use(morgan('combined'))

// Template Engine
app.engine('hbs', engine({
   extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

app.get('/news', (req, res) => {
   return res.render('news')
});

app.get('/', (req, res) => {
   return res.render('home')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})