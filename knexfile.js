require('dotenv').config();

console.log({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: 'revhaut_db',
  user: 'postgres',
  password: process.env.DB_PASSWORD,
});
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: 'revhaut_db',
      user: 'postgres',
      password: process.env.DB_PASSWORD,
    },
    // connection: process.env.DATABASE_URL,
    // searchPath: 'knex,public',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },
};
