//AyesOnAi/express-AyesOnAi/router/api/objectDetection.js
const express = require("express");
const router = express.Router();
const { generateText } = require("../../services/languageService");

router.post("/", async (req, res) => {
  // Handle the data here
  const { objectName, personNumber, transcript } = req.body;
  const requestprompt =
    "Question: " +
    transcript +
    ". Context: I am a blind person and may sometimes need information about my surroundings(just ansure my quastions and never say im blind just ansure). " +
    "Captured Object (use only if asked): " +
    objectName +
    ". Captured Person Number (use only if asked): " +
    personNumber +
    ".";
  //   console.log(requestprompt);
  // Call your AI service with the transcript as the prompt
  try {
    const output = await generateText(requestprompt);
    res.json({ message: "Data received!", output: output });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error generating text", error: err.toString() });
  }
});

module.exports = router;
