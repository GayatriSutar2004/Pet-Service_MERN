const mongoose = require("mongoose");

const categorySchema =
new mongoose.Schema({

  title: String,

  description: String,

  icon: String,

  viewsCount: Number,

  isActive: Boolean

}, {
  timestamps: true
});

module.exports =
mongoose.model(
  "Category",
  categorySchema
);