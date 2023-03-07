const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabase = require("./dbconnect");
const User = require("./models/userModel.js");
const bcrypt = require("bcrypt");
require("dotenv").config();

app.use(express.json());

app.use(cors());

const bcryptSalt = bcrypt.genSaltSync(12);

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
  } catch (error) {
    console.log(error);
  }
});

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
