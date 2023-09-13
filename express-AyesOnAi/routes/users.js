// file : AyesOnAi\express-AyesOnAi\routes\users.js

var express = require("express");
var router = express.Router();
const usersController = require("../controllers/api/users");

router.delete("/:id/delete", usersController.deleteUser);
router.get("/:id", usersController.getUserById);
router.put("/update/:id", usersController.updateUserById);
router.post("/create", usersController.create);

router.get("/", usersController.getAllUsers);

module.exports = router;
