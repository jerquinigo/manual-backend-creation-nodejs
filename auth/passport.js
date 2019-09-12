const passport = require("passport");
const { db } = require("../db/index.js");

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log(user, "user Serial");
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    db.one("SELECT * FROM users WHERE email = ${email}", {
      email: email
    })
      .then(user => {
        console.log(user);
        done(null, {
          name: user.name,
          email: user.email,
          password: user.password,
          profile_pic: user.profile_pic
        });
      })
      .catch(err => {
        done(err, null);
      });
  });
};
