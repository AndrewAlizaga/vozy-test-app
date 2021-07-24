//Libs
const express = require("express");
const router = express.Router();

//Routers
const auth = require("./auth")
const account = require("./account")
const post = require("./post")

//router.route('/auth', auth)
//router.route('/account', account)
router.route('/post', post)


module.exports = router;