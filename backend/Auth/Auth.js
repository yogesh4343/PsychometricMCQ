const jwt = require("jsonwebtoken");
const userSchema = require("../Models/UserSchema");
exports.Auth = async(req,res , next)=>{
    const {token} = req.cookies;
    // console.log(token);

    if(!token){
        return res.status(401).json({message: 'Invalid token' , status: 401});
    }

    const tokenEqual = await jwt.verify(token , process.env.JWT_SECRET)
    // console.log("tokenEqual" , tokenEqual);

    // req.userByAuth = await userSchema.findById(tokenEqual);
    req.userByAuth = tokenEqual;

    next()

}