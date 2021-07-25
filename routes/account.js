const express = require('express')
const router = express.Router();
//Middleware
const accountValidator = require("../middleware/validators/account")
//Controllers
const {createAccount} = require("../controllers/account")



//Public end point
//Post account
router.post('/', accountValidator, createAccount)

router.get('/', (req, res) => {
    console.log('arrived here')
    return res.status(200).json('Hello there')
})

module.exports = router;