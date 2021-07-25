//Libs
const express = require("express");
const router = express.Router();

//Routers
const auth = require("./auth")
const account = require("./account")
const post = require("./post")

router.use('/auth', auth)
router.use('/account', account)
router.use('/post', post)
///router.use('/documentation', )


module.exports = router;