const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 5555;
const RUNTIME = process.env.NUBO_RUNTIME || 'unknown';
const REGION = process.env.NUBO_REGION || 'unknown';
const LOCATION = process.env.NUBO_LOCATION || 'unknown';
const app = express();

const dir = path.join(__dirname, './views');
console.log(dir);

app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', dir);

app.get('/', (req, res) => {
  res.render('home', { runtime: RUNTIME, region: REGION, location: LOCATION });
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
