const mongoose =
require("mongoose");

const Category =
require("./models/Category");

mongoose.connect(
  "mongodb://127.0.0.1:27017/pet_dashboard"
);

const categories = [

{
  title:
  "Travel & Accommodation",

  viewsCount: 79,

  description:
  "Places where pets stay",

  icon: "hotel",

  isActive: true
},

{
  title:
  "Food & Accessories",

  viewsCount: 25,

  description:
  "Food and supplies",

  icon: "shopping",

  isActive: true
},

{
  title:
  "Health & Grooming",

  viewsCount: 29,

  description:
  "Vet and grooming",

  icon: "health",

  isActive: true
},

{
  title:
  "Recreation & Training",

  viewsCount: 12,

  description:
  "Fun activities",

  icon: "sports",

  isActive: true
}

];

async function seedData() {

  await Category.deleteMany();

  await Category.insertMany(
    categories
  );

  console.log(
    "Data inserted"
  );

  process.exit();

}

seedData();