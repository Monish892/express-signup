const user=require('../model/usermodel')
const signup=async (res,req)=>{
    const{username,email,password,dateofbirth}=req.body;
    const error=[];


    if(!username || username.trim()===""){
        error.push({msg:"username cannot be empty"})
    } else if(username.length<3){
        error.push({msg:"username must be atleast 3 characters"})
    }

    if (!email || email.trim()===""){
        error.push({msg:"email cannot be empty"})
    } 

    if(!password || password.trim()===""){
        error.push({msg:"password cannot be empty"})
    } else if(password.length<8){
        error.push({msg:"invalid password"})
    } 

  

    if(error.length<0){
        return res.status(400).json({error})
    }

    console.log("Creating user:",username,email,password,dateofbirth);
    

}

module.exports={signup};