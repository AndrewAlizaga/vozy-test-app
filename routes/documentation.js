const express = require("express")
const router = express.Router()

//Controllers
const documentation = require("../controllers/documentation")

//Public route
//Api documentation
router.get("/", documentation)

module.exports = router
