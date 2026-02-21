const jwt = require("jsonwebtoken")
const User = require("../models/user-model")

const authMiddleware = async(req, res, next)=>{
    const token = req.header("Authorization");

    // console.log("token getting from req.header ",token)

    if(!token){
        return res
        .status(401)
        .json({msg: "Unauthorized HTTP, token not provided."})
    }

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token from auth middleware: ",jwtToken)

    try {
        const isVarified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
        const userData = await User.findOne({email: isVarified.email})
        .select({password:0})
        console.log(userData)
        req.user = userData;
        req.token = jwtToken;
        req.userId = userData._id;
        next();
    } catch (error) {
        res.status(401).json({msg: "Unauthorized. Invalid token."})
    }
}

module.exports = authMiddleware;