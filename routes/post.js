const router = require('express').Router()
const {postPost, getPost, getOnePost, updatePost, deletePost} = require("../controllers/post")

//Get all post
router.get('/', getPost)

//Get 1 post
router.get('/:id', getOnePost)

//Post 1 post
router.post('/', postPost)

//Update 1 post
router.put('/', updatePost)

//Delete 1 post
router.delete('/', deletePost)

module.exports = router;