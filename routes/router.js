//Libs
const express = require("express");
const router = express.Router();

//Routers
const auth = require("./auth")
const account = require("./account")
const post = require("./post")
const documentation = require("./documentation")

router.use('/auth', auth)
router.use('/account', account)
router.use('/post', post)
router.use('/documentation', documentation)


module.exports = router;