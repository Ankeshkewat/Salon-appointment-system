const mongoose = require("mongoose")

const userSchema  =  mongoose.Schema({
    avatar:{type:String,required:false,default:"https://cdn-icons-png.flaticon.com/512/1077/1077012.png"},
    name:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:Number,required:true},
    password:{type:String,required:true},
    gender:{type:String,required:false},
    isAdmin:{type:Boolean, default:false},
    isActive:{type:Boolean, default:false}    
})

const UserModel =  mongoose.model("user",userSchema)
module.exports = {UserModel}
