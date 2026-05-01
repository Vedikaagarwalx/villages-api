const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());

// GET - saare villages
app.get("/villages", (req, res) => {
  const { state } = req.query;
  
  if (state) {
    db.all("SELECT * FROM villages WHERE state = ?", [state], (err, rows) => {
      if (err) return res.json({ error: err.message });
      res.json(rows);
    });
  } else {
    db.all("SELECT * FROM villages", [], (err, rows) => {
      if (err) return res.json({ error: err.message });
      res.json(rows);
    });
  }
});

// POST - naya village add karo
app.post("/villages", (req, res) => {
  const { name, state } = req.body;
  db.run("INSERT INTO villages (name, state) VALUES (?, ?)", [name, state], function(err) {
    if (err) return res.json({ error: err.message });
    res.json({ message: "Village add ho gaya!", id: this.lastID });
  });
});

app.put("/villages/:id", (req, res) => {
  const { name, state, population } = req.body;
  db.run(
    "UPDATE villages SET name = ?, state = ?, population = ? WHERE id = ?",
    [name, state, population, req.params.id],
    (err) => {
      if (err) return res.json({ error: err.message });
      res.json({ message: "Village update ho gaya!" });
    }
  );
});

// DELETE - village hatao
app.delete("/villages/:id", (req, res) => {
  db.run("DELETE FROM villages WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.json({ error: err.message });
    res.json({ message: "Village delete ho gaya!" });
  });
});
app.get("/villages/:id", (req, res) => {
  db.get(
    "SELECT * FROM villages WHERE id = ?",
    [req.params.id],
    (err, row) => {
      if (err) return res.json({ error: err.message });

      if (!row) {
        return res.json({ message: "Village nahi mila" });
      }

      res.json(row);
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
