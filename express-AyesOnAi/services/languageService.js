// AyesOnAi/express-AyesOnAi/services/languageService.js
//backend ai
require("dotenv").config({ path: "../.env" });

const fetch = require("node-fetch");

const url = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${process.env.API_KEY}`;

const headers = {
  "Content-Type": "application/json",
};

const generateText = (promptText) => {
  const data = {
    prompt: {
      text: promptText,
    },
  };

  console.log("Searching for the information, please wait...");

  return fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response["candidates"] && response["candidates"].length > 0) {
        const output = response["candidates"][0]["output"];
        // console.log("Here's what I found:");
        console.log(output);
        return output;
      } else {
        console.error("Unexpected response format: ", response);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

module.exports = {
  generateText,
};
