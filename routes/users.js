let express = require("express");
let router = express.Router();
const { createUser, getAllUsers } = require("../db/queries/usersqueries.js");

router.get("/allUsers", getAllUsers);
router.post("/newUser", createUser);

module.exports = router;
