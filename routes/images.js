const express = require('express');
const router = express.Router();

const Image = require('../models/Image');

// @route   POST api/images
// @desc    Add new image URL
router.post('/add', async (req, res) => {
  const { url } = req.body;
  try {
    const newImage = new Image({
      url,
    });
    const image = await newImage.save();
    res.json(image);
    console.log(image);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
