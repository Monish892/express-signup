const mongoose=require('mongoose')
const userschema= new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },

    email:{
        type:String,
        required:true,

    },

    password:{
        type:String,
        required:true,
    },

    dateofbirth:{
        type:Date,
        required:true,
    }
})




module.exports=mongoose.model('user',userschema)