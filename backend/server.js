const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

/* IMPORT ROUTES */

const categoryRoutes =
require("./routes/categoryRoutes");

const vendorRoutes =
require("./routes/vendorRoutes");

const uploadRoutes =
require("./routes/uploadRoutes");

/* CREATE APP */

const app = express();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());

/* CONNECT DATABASE */

mongoose.connect(
  "mongodb://127.0.0.1:27017/pet_dashboard"
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("DB Error:", err);
});

/* ROUTES */

app.use(
  "/api",
  uploadRoutes
);

app.use(
  "/api/categories",
  categoryRoutes
);

app.use(
  "/api/vendors",
  vendorRoutes
);

/* TEST ROUTE */

app.get(
  "/",
  (req, res) => {

    res.send(
      "API running successfully"
    );

  }
);

/* START SERVER */

const PORT = 5000;

app.listen(
  PORT,
  () => {

    console.log(
      `Server running on port ${PORT}`
    );

  }
);