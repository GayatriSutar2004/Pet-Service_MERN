const express = require("express");

const router = express.Router();

const Vendor =
require("../models/Vendor");

/* GET vendors by category */

router.get(
  "/category/:category",
  async (req, res) => {

    try {

      const vendors =
      await Vendor.find({

        category:
        req.params.category

      });

      res.json(vendors);

    } catch (err) {

      res.status(500).json({
        error: err.message
      });

    }

  }
);

module.exports = router;