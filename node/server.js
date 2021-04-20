const app = require('express')();
const helmet = require('helmet');
const PORT = process.env.PORT || 3000;

app.use(helmet());

app.use('*', (req, res) => {
  res.send(
    '<h1 style="font-family: sans-serif; text-align: center; position: fixed; top: 45%; left: 50%; transform: translateX(-50%) translateY(-50%);">Node <span style="white-space: nowrap">on Nubo Apps</span></h1>',
  );
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
