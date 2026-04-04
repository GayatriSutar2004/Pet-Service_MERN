const express = require("express");

const router = express.Router();

const Category =
require("../models/Category");


// GET category insights

router.get(
  "/insights",
  async (req, res) => {

    try {

      const data =
      await Category.find(
        {},
        {
          title: 1,
          viewsCount: 1
        }
      );

      res.json(data);

    } catch (err) {

      res.status(500).json({
        error: err.message
      });

    }

  }
);

module.exports = router;