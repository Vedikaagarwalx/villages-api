const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("villages.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Database connected");
  }
});
db.run(`CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    state TEXT,
    population INTEGER
  )`);
  module.exports = db;