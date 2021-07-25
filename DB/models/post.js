const mongoose = require("mongoose");
const userModel = require("./user");

//Base schema

const postSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    title: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    }
});

//Service

//Check ownership
postSchema.methods.checkOwnership = async function (user) {
    console.log('ownership check')
    console.log(this.user)
    console.log(user)
    return this.user.equals(user)
    //return await bcrypt.compare(enteredPassword, this.password)
}

const postModel = new mongoose.model('post', postSchema);


module.exports = postModel;