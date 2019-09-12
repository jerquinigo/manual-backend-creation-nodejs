const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");
const { db } = require("../db/index.js");
const options = { usernameField: "email", passwordField: "password" };

passport.use(
  new LocalStrategy(options, (email, password, done) => {
    console.log(password);
    db.one("SELECT * FROM users WHERE email = ${email}", {
      email: email
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, {
            name: user.name,
            email: user.email
          });
        }
      })
      .catch(err => {
        console.log("500 ERROR??", err);
        return done(err);
      });
  })
);

init();

module.exports = passport;
