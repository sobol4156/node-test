const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/check-user", (req, res) => {
  let username = req.body.username;
  if (username == "")
   return res.redirect("/")
    else
    return res.redirect('/user/' + username)
});

app.get("/user/:name", (req, res) => {
  res.render("user", {name: req.params.name});
});

app.listen(3000, () => {
  console.log("server started");
});
