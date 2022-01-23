const knex = require("knex")
const connectedKnex = knex ({
    client: "sqlite3",
    connection: {
      filename: "students.sqlite"
    }
  });

module.exports = connectedKnex

