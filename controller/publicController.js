const passport = require("../server/config/passport");
const User = require("../server/models/index").User;

async function getRegister(req, res) {
  res.render("register/auth.ejs");
}
async function postRegister(req, res) {
  let novoUsuario = "undefined";
  try {
    novoUsuario = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
  } catch (err) {
    console.log("Erro ao registrar usuario\nError:" + err);
  }

  console.warn("Novo usuário registrado:" + novoUsuario.toString());
}

async function getLogin(req, res) {
  res.render("login/auth.ejs");
}
async function postLogin(req, res) {}

module.exports = { getRegister, postRegister, getLogin, postLogin };
