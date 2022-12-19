import { Client } from 'https://deno.land/x/mysql/mod.ts';

const client = await new Client().connect({
  hostname: 'aws-eu-west-2.connect.psdb.cloud',
  port: 6700,
  username: 'root',
  password: 'zdbf7kA5xVSMhA367uWK',
  db: 'railway',
});

const messages = await client.query(`select * from commands`);
console.log(messages);

await client.close();
