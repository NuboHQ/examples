import { Client } from 'https://deno.land/x/mysql/mod.ts';

const client = await new Client().connect({
  hostname: '',
  port: 0,
  username: '',
  password: '',
  db: '',
});

const messages = await client.query(`select * from commands`);
console.log(messages);

await client.close();
