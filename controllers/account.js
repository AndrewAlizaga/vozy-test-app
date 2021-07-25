//Libs
const {validationResult, body} = require('express-validator');

//Models
const userPost = require("../DB/models/user");


//Create account
const createAccount = async (req, res) => {
    console.log('create account controller')
    //Validate body
    const errors = validationResult(req)
    
    //Ivalid request
    if(!errors.isEmpty())
        return res.status(403).json({'errorMessage': errors.array()})
    

    try {

        //Attempting user creationg
        const newAccount = new userPost(req.body);

        newAccount.save().then(e => {
            return res.status(200).json({'result': 'success', 'message': e})
        });
    } catch (error) {
        //Server error catch
        console.log(error);
        return res.status(503).json({'errorMessage': error});
    }
    
}

//Update Account

//Delete Account

//Check another account

//Get othe peoples accounts


module.exports = {
    createAccount
}