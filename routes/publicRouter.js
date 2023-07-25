const express = require('express');
const router = express.Router();
const controller = require('../controller/publicController');
router.get('/auth',controller.openLogin);
module.exports = router;
