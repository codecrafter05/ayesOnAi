// AyesOnAi/express-AyesOnAi/services/aiService.js

const fetch = require("node-fetch");
require("dotenv").config({ path: "../.env" });

const url = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${process.env.API_KEY}`;
const headers = { "Content-Type": "application/json" };

function sendToBackend(data) {
  return fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ prompt: { text: data } }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response["candidates"] && response["candidates"].length > 0) {
        return response["candidates"][0]["output"];
      } else {
        console.error("Unexpected response format: ", response);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => console.error(err));
}

module.exports = { sendToBackend };
