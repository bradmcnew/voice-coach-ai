const { Pool } = require("pg");
// load environment variables
require("dotenv").config();

// Debugging log for environment variables
console.log("DB_USER:", process.env.DB_USER);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on("connect", () => {
  console.log("Connected to the PostgreSQL database");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
