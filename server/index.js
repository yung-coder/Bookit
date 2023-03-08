const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabase = require("./dbconnect");
const User = require("./models/userModel.js");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const imageDownloader = require("image-downloader");
require("dotenv").config();

app.use(express.json());

app.use(cookieParser());

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = "dollarsignonetime";
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use('/uploads' , express.static(__dirname + '/uploads'));

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
          res.cookie("token", token).json(userDoc);
        }
      );
      // console.log(userDoc);
    } else {
      res.status(422).json("pass not ok");
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      console.log(email, name);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = "" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads",
  });
  res.json(__dirname + "/uploads" + newName);
});

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
