const express = require("express");
const router = express.Router();
const controller = require("../controller/publicController");
router.get("/auth/register", controller.getRegister);
router.post("/auth/register", controller.postRegister);
router.get("/auth/login", controller.getLogin);
router.post("/auth/login", controller.postLogin);
module.exports = router;
