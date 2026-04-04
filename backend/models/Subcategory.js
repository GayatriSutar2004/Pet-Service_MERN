const mongoose = require("mongoose");

const subcategorySchema =
new mongoose.Schema({

  title: String,

  category: String,

  description: String,

  viewsCount: Number,

  isPopular: Boolean

});

module.exports =
mongoose.model(
  "Subcategory",
  subcategorySchema
);