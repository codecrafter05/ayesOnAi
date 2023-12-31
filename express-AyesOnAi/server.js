//file: AyesOnAi\express-AyesOnAi\server.js

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const userRoute = require("./routes/users");
require("dotenv").config();

const cors = require("cors");

// Connect to db after the dotenv above
require("./config/database");

const app = express();
app.use(cors());
app.use(logger("dev"));
// Process data in body of request if
// Content-Type: 'application/json'
// and put that data on req.body
app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// middleware that adds the user object from a JWT to req.user
app.use(require("./config/checkToken"));
app.use("/", userRoute);
app.use("/api/users", userRoute);

// Put all API routes here (before the catch-all)
app.use("/api/users", require("./routes/api/users"));

// Protect all routes in the items router
const ensureLoggedIn = require("./config/ensureLoggedIn");

// Add this before your catch-all route
app.use("/api/object-detection", require("./routes/api/objectDetection"));

// Add the purchase route
app.use("/api/purchase", require("./routes/api/purchase"));

// "catch-all" route that will match all GET requests
// that don't match an API route defined above
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
