const { db } = require("../index.js");

getAllUsers = (req, res, next) => {
  db.any("SELECT name,email FROM users").then(users => {
    res.status(200).json({
      status: "success",
      users: users,
      message: "all users present"
    });
  });
};

createUser = (req, res, next) => {
  db.one(
    "INSERT INTO users(name, email, password, profile_pic) VALUES(${name},${email},${password},${profile_pic}) RETURNING name",
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
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
  getAllUsers
};
