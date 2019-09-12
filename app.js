let express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");

let usersRouter = require("./routes/users.js");
let sessionsRouter = require("./routes/sessions.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "aubrey",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, next) => {
  res.send("this is the homepage");
});

app.use("/api/users", usersRouter);
app.use("/api/sessions", sessionsRouter);

app.get("*", (req, res, next) => {
  res.send("error");
});

app.listen(3100, () => {
  console.log("port 3100");
});
