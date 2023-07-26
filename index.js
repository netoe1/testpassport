const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const session = require("express-session");
const routers = {
  publicRoute: require("./routes/publicRouter"),
};
const passport = require("./server/config/passport");

app.use(
  session({
    secret: "testing",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
app.use(passport.authenticate("session"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

app.use("/public", routers.publicRoute);

app.get("/", (req, res) => {
  res.redirect("/public/auth/register");
});

app.listen(PORT, () => {
  console.log("Running in:" + PORT);
});
