const Koa = require('koa');
const app = new Koa();
const PORT = ~~process.env.PORT || 5555;

app.use(async (ctx) => {
  ctx.body = {
    message: 'Koa on Nubo',
  };
});

app.listen(PORT);
console.log(`> Ready on http://localhost:${PORT}`);
