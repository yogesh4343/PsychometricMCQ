const express = require('express');
const userSchema = require("../Models/UserSchema");
const jwt = require("jsonwebtoken");




// register


exports.Signup = async(req,res,next)=>{
    // console.log("SignupUser User",)
    try {
        const {name , email , password  , gender} = req.body;

        const user = await userSchema.findOne({email})

        if(user){
            return res.status(400).json({status:false , message:"User already exists"})
        }

      
        if(!name || !email || !password || !gender ){
            return res.status(400).json({status:false , message:"Enter All Details"});
        }



        const newUser = new userSchema({
            name  , email , password , gender
        })


        // tok

        const token = jwt.sign({id:newUser._id} , process.env.JWT_SECRET , {
            expiresIn : "5d"
        })

        // opt 

        const options = {
            expires : new Date(
                Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
            ),
            httpOnly :true,
        }
    

       if(newUser){
        await newUser.save();

        return res.status(201).cookie("token" , token , options).json({status:true , message: "User saved successfully" , newUser , token })
       
    
    }else{
        return res.status(400).json({status:false , message:"invalid user "});
       }
        
    } catch (error) {
        console.log("error in signup" , error)
        return res.status(500).json({status:false , message:"Error"})    ;
    }
}









// =============================================================================


// login =================================

exports.logIn = async(req,res,next)=>{

    const {email , password} = req.body;

    let loginDetail;

    try {
        loginDetail = await userSchema.findOne({email});

        if(!loginDetail){
            return res.status(200).json({status:false, message:"User Not Registered"})
        }

        if(!email || !password){
            return res.status(200).json({status:false , message:"Enter All Details"});
        }

        // console.log(loginDetail);

        if(password != loginDetail.password){
            return res.status(200).json({status:false , message:"Details Not Match"})    ;
        }


        // tok 
        const token = jwt.sign({id:loginDetail._id} , process.env.JWT_SECRET , {
            expiresIn : "5d"
        })


        // opt 

        const options = {
            expires : new Date(
                Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
            ),
            httpOnly :true,
        }



        return res.status(200).cookie("token" , token , options).json({status:true, message:"User Login Success" , loginDetail , token })    ;

        
    } catch (error) {
        console.log("error in signup" , error)
        return res.status(200).json({status:false , message:"Error"})    ;
    }



}




// =============================================================================




// /send/:id
// single User 

exports.singleUser = async(req,res)=>{
    // const {id:userId} = req.params;
    const {id:fetchByAuth} = req.userByAuth;
    console.log("fetched By Auth Id" , fetchByAuth);;
    let userById

    // console.log("userId: " + userId)

    
    userById = await userSchema.findById(fetchByAuth)
    
    if(!userById){
        return res.status(500).json({status:false , message:"User Id not Fetched"});
    }
    
    return res.status(201).json({status:false , message:"Single User Fetched"  , userById}) ;


};



// ==============================================================================*/





// logout 

exports.logout = async(req,res)=>{
    try {

         // opt 

         const options = {
            expires : new Date(
                Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
            ),
            httpOnly :true,
        }




        return res.status(200).cookie("token" , null , options).json({status:201, message:"User Logout " })    ;

        
    } catch (error) {
        console.log("error in logout" , error)
        return res.status(500).json({status:500 , message:"Error in logout  "})    ;
    }
};

