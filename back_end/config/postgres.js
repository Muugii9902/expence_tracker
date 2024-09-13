const postgres = require("postgres");

const sql = postgres({
  host: "GHOST",
  database: "PGDATABASE",
  username: "PGUSER",
  password: "PGPASSWORD",
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

module.exports = sql;
