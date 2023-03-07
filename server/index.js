const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabase = require("./dbconnect");
const User = require("./models/userModel.js");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.use(express.json());

app.use(
  cors({
    credentials: true,
  })
);

app.use(cookieParser());

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = "dollarsignonetime";

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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });
    const passOK = bcrypt.compareSync(password, userDoc.password);
    if (passOK) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (eer, token) => {
          if (eer) throw eer;
          res.cookie("token", token).json("pass ok");
        }
      );
      console.log(userDoc);
    } else {
      res.status(422).json("pass not ok");
    }
  } catch (error) {
    console.log(error);
  }
});

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
