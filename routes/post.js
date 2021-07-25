//Middleware
const {authMiddleware} = require("../middleware/auth")
const postValidator = require("../middleware/validators/post")


const router = require('express').Router()
const {postPost, getPost, getOnePost, updatePost, deletePost} = require("../controllers/post")


//Public route
//Get all post
router.get('/', getPost)

//Public route
//Get 1 post
router.get('/:id', getOnePost)

//Private route
//Token required
router.post('/', authMiddleware, postValidator, postPost)

//Private route
//Update 1 post
router.put('/:id', authMiddleware, postValidator, updatePost)

//Delete 1 post
router.delete('/:id', authMiddleware, deletePost)

module.exports = router;