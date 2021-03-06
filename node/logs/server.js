const app = require('express')();
const helmet = require('helmet');
const morgan = require('morgan');
const PORT = process.env.PORT || 5555;

app.use(helmet());
app.use(morgan('combined'));

app.use('*', (req, res) => {
  res.send(
    '<h1 style="font-family: sans-serif; text-align: center; position: fixed; top: 45%; left: 50%; transform: translateX(-50%) translateY(-50%);">Logs Example <span style="white-space: nowrap">on Nubo</span></h1>',
  );
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
