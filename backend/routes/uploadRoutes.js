const express = require("express");
const multer = require("multer");

const router = express.Router();

const Vendor =
require("../models/Vendor");

const Category =
require("../models/Category");

const upload =
multer({
  storage:
  multer.memoryStorage()
});

router.post(
  "/upload-json",
  upload.single("file"),
  async (req, res) => {

    try {

      const jsonData =
      JSON.parse(
        req.file.buffer.toString()
      );

      if (jsonData.categories) {

        await Category.insertMany(
          jsonData.categories
        );

      }

      if (jsonData.vendors) {

        await Vendor.insertMany(
          jsonData.vendors
        );

      }

      res.json({

        message:
        "Data uploaded successfully"

      });

    } catch (err) {

      res.status(500).json({

        error:
        err.message

      });

    }

  }
);

module.exports = router;