//Libs
const mongoose = require("mongoose")

//Base schema
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
}, {timestamps: true})


//Service

//Password match
userSchema.methods.passwordMatch = async function (enteredPassword) {
    return this.password == enteredPassword
    //return await bcrypt.compare(enteredPassword, this.password)
}



const userModel = new mongoose.model('user', userSchema);




module.exports = userModel