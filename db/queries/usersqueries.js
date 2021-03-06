const { db } = require("../index.js");
const authHelpers = require("../../auth/helpers");

getAllUsers = (req, res, next) => {
  db.any("SELECT name,email FROM users").then(users => {
    res.status(200).json({
      status: "success",
      users: users,
      message: "all users present"
    });
  });
};

deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result("DELETE FROM users where id=$1", [userId])
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "user has been deleted"
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);
  db.one(
    "INSERT INTO users(name, email, password, profile_pic) VALUES(${name},${email},${password},${profile_pic}) RETURNING name",
    {
      name: req.body.name,
      email: req.body.email,
      password: hash,
      profile_pic: req.body.profile_pic || null
    }
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "user has been created"
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

module.exports = {
  createUser,
  getAllUsers,
  deleteUser
};
