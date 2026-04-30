const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('villages.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    state TEXT
  )`);

  console.log("Database ready hai!");
});

module.exports = db;