const express = require('express')
const router = express.Router();
//Middleware
const accountValidator = require("../middleware/validators/account")
const {authMiddleware} = require("../middleware/auth")

//Controllers
const {createAccount, updateAccount, deleteAccount, getAccounts} = require("../controllers/account")



//Public end point
//Post account
router.post('/', accountValidator, createAccount)

//Private end point
//Update account
router.put('/', authMiddleware, accountValidator, updateAccount)

//Pirvate end point
//Delete account
router.delete('/', authMiddleware, deleteAccount)

//Public route
//Get peoples accounts, just names, protects PI
router.get('/', getAccounts)

module.exports = router;
