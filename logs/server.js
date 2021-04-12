const app = require('express')();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));

app.use('*', (req, res) => {
  res.send(
    '<h1 style="font-family: sans-serif; position: fixed; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);">Logs Example on Nubo Apps</h1>',
  );
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
