let express = require("express");
const app = express();
const bodyParser = require("body-parser");

let usersRouter = require("./routes/users.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("this is the homepage");
});

app.use("/api/users", usersRouter);

app.get("*", (req, res, next) => {
  res.send("error");
});

app.listen(3100, () => {
  console.log("port 3100");
});
