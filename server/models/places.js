const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfO: String,
  checkIn: Number,
  checkout: Number,
  maxGuests: Number,
});

const PlacesModel = mongoose.model("Place", placeSchema);

module.exports = PlacesModel;
