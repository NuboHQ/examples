const app = require('express')();
const helmet = require('helmet');
const PORT = process.env.PORT || 3000;
const REGION = process.env.NUBO_REGION || 'unknown region';
const LOCATION = process.env.NUBO_LOCATION || 'unknown location';

app.use(helmet());

app.use('*', (req, res) => {
    res.send(
        `<div style="font-family: sans-serif; text-align: center; position: fixed; top: 45%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1>Express on Nubo</h1>
            <p style="color: #777">${REGION}<br/><br/>${LOCATION}</p>
         </div>`,
    );
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
