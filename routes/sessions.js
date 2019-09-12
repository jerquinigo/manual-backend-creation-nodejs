let express = require("express");
let router = express.Router();
const passport = require("../auth/local.js");
const { loginRequired } = require("../auth/helpers");
const {
  loginUser,
  isLoggedIn,
  logoutUser
} = require("../db/queries/sessionsQueries.js");

router.post("/login", passport.authenticate("local", {}), loginUser);
router.get("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;
