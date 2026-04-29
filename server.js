const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Vedika! Server is working!");
});

app.get("/about", (req, res) => {
  res.send("This is my first backend project!");
});

app.get("/villages", (req, res) => {
  res.json([
    { id: 1, name: "Rampur", state: "UP" },
    { id: 2, name: "Sultanpur", state: "UP" },
    { id: 3, name: "Mathura", state: "UP" }
  ]);
});
app.get("/villages/:id", (req, res) => {
  const villages = [
    { id: 1, name: "Rampur", state: "UP" },
    { id: 2, name: "Sultanpur", state: "UP" },
    { id: 3, name: "Mathura", state: "UP" }
  ];

  const id = parseInt(req.params.id);
  const village = villages.find(v => v.id === id);

  if (village) {
    res.json(village);
  } else {
    res.json({ error: "Village nahi mila!" });
  }
});
app.use(express.json());

app.post("/villages", (req, res) => {
  const newVillage = req.body;
  console.log("Naya village aaya:", newVillage);
  res.json({ message: "Village add ho gaya!", data: newVillage });
});
app.delete("/villages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json({ message: `Village ${id} delete ho gaya!` });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});