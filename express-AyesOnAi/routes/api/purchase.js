const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.post("/", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.hasPurchased = true;
    await user.save();
    res.status(200).json({ message: "Purchase recorded successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error while recording purchase",
        error: error.message,
      });
  }
});

module.exports = router;
