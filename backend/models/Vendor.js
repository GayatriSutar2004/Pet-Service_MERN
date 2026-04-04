const mongoose = require("mongoose");

const vendorSchema =
new mongoose.Schema({

  title: String,

  vendorName: String,

  category: String,

  subcategory: String,

  city: String,

  location: String,

  phoneNumber: String,

  rating: Number,

  numberOfRatings: Number,

  amenities: [String],

  priceRange: String,

  isVerified: Boolean,

  viewsCount: Number

}, {
  timestamps: true
});

module.exports =
mongoose.model(
  "Vendor",
  vendorSchema
);