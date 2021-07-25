//Libs
const { validationResult } = require("express-validator")

//Models
const postModel = require("../DB/models/post")

const postPost = async (req, res) => {

    //Validate Post body
    const errors = validationResult(req)

    //Ivalid request
    if (!errors.isEmpty())
        return res.status(400).json({ 'errorMessage': errors.array() })

    try {

        //Attempting user creationg
        const newPost = new postModel({ ...req.body, 'user': req.user._id });

        newPost.save().then(e => {
            return res.status(200).json({ 'result': 'success', 'message': e })
        });
    } catch (error) {
        //Server error catch
        console.log(error);
        return res.status(503).json({ 'errorMessage': error });
    }
}

const getPost = async (req, res) => {

    try {
        console.log('get posts controller')

        //Get posts, and populate updated name of the author
        const posts = await postModel.find().populate('user', 'name')
        res.status(200).json(posts);

    } catch (error) {
        return res.status(503).json({ 'errorMessage': error.toArray() })

    }

}

const getOnePost = async (req, res) => {

    try {
        console.log('get single post controller')

        //Get id param
        const post_id = req.params.id


        if(!post_id)
            return res.status(400).json({'errorMessage': "Wrong request, bad formulated"})
        
        //Get post, and populate updated name of the author
        const post = await postModel.findById(post_id).populate('user', 'name')
        res.status(200).json(post);

    } catch (error) {
        return res.status(503).json({ 'errorMessage': error.toArray() })
    }
}

const updatePost = async (req, res) => {

    //Validate Post body
    const errors = validationResult(req)

    //Ivalid request
    if (!errors.isEmpty())
        return res.status(400).json({ 'errorMessage': errors.array() })
    
    try {
        console.log('update single post controller')

        //Get id param
        const post_id = req.params.id

        if(!post_id)
            return res.status(400).json({'errorMessage': "Wrong request, bad formulated"})
        
        //Get post, and populate updated name of the author
        let post = await postModel.findById(post_id)

        //Check if user owns the post

        let ownership = await post.checkOwnership(req.user._id)

        console.log('Ownership status')
        console.log(ownership)

        if(!ownership)
            return res.status(403).json({'errorMessage': "Access Denied, you have no permission to modify or delete this post"}) 

        //User owns the post, proceed with update
        post.title = req.body.title
        post.text = req.body.text

        post.save().then(e => {
            //Post saved and returned
            res.status(200).json(post);
        })
        

    } catch (error) {
        //Server error
        console.log(error)
        return res.status(503).json({ 'errorMessage': error})
    }
}

const deletePost = async (req, res) => {
    try {
        console.log('delete single post controller')

        //Get id param
        const post_id = req.params.id

        if(!post_id)
            return res.status(400).json({'errorMessage': "Wrong request, bad formulated"})
        
        //Get post, and populate updated name of the author
        let post = await postModel.findById(post_id)

        //Check if user owns the post

        let ownership = await post.checkOwnership(req.user._id)

        console.log('Ownership status')
        console.log(ownership)

        if(!ownership)
            return res.status(403).json({'errorMessage': "Access Denied, you have no permission to modify or delete this post"}) 

        //User owns the post, proceed with deletion

        post.remove().then(e => {
                return res.status(200).json({'message': 'success, post deleted', e})
            }
        )
        

    } catch (error) {
        //Server error
        console.log(error)
        return res.status(503).json({ 'errorMessage': error})
    }
}




//Exporting controllers
module.exports = { postPost, updatePost, getOnePost, getPost, deletePost }