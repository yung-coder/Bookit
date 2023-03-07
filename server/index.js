const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  res.json({ name, email, password });
});

app.listen(3000);
