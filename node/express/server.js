const server = require('express')();
const helmet = require('helmet');
const PORT = process.env.PORT || 5555;
const REGION = process.env.NUBO_REGION || 'unknown';
const LOCATION = process.env.NUBO_LOCATION || 'unknown';

const VERSION = '1.2';

server.use(helmet());

server.use('*', (req, res) => {
  res.send(
    `<div style="font-family: sans-serif; text-align: center; position: fixed; top: 45%; left: 50%; transform: translateX(-50%) translateY(-50%);">
      <h1>Express on Nubo</h1>
      < style="color: #777">${VERSION}
      <br/>
      <br/>
      ${REGION}
      <br/>
      <br/>
      ${LOCATION}</p>
    </div>`
  );
});

server.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
