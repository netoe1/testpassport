async function openLogin(req, res) {
  res.render("login/auth.ejs");
}

async function register(req, res) {}
module.exports = { openLogin };
