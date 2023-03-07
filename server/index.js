const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabase = require("./dbconnect");
require("dotenv").config();

app.use(express.json());

app.use(cors());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  res.json({ name, email, password });
});

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
