let express = require("express");
let router = express.Router();
const {
  createUser,
  getAllUsers,
  deleteUser
} = require("../db/queries/usersqueries.js");

router.get("/allUsers", getAllUsers);
router.post("/newUser", createUser);
router.delete("/:id", deleteUser);

module.exports = router;
