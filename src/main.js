import { engine } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();
const port = 3000;

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

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
  console.log(`Example http://localhost:${port}`);
})