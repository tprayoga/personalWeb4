const { Pool } = require("pg");

const dbPool = new Pool({
  database: "db_web",
  port: 5432,
  user: "postgres",
  password: "1234",
});

module.exports = dbPool;
