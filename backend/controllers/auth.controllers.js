import bcrypt from "bcryptjs"
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.utils.js";


export const signup = async (req,res) => {
    try {
        const {fullname,username,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match"})
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error: "Username already exists"})
        }
        //hash password here\
   
        const salt  = await bcrypt.genSalt(10);
        const hashedPassword =  await bcrypt.hash(password,salt);

        const newUser  = await User({
            fullname,
            username,
            password:hashedPassword,
            gender
        })

        if(newUser){
            //generate jwt token here
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username
            })
        }else{
            return res.status(400).json({error: "Inavlid User data"})
        }
    } catch (error) {
        console.log("error in sign up controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export const login =  async (req,res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    // console.log(`Login req : ${username}`)
    if(!user){
        res.status(400).json({error: "Invalid Username"})
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
        res.status(400).json({error: "Invalid Password"})
    }

    generateTokenAndSetCookie(user._id,res);

    res.status(200).json({
        _id:user._id,
        fullname:user.fullname,
        username:user.username
    })

}

export const logout = async (req,res) => {
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json("Logged out successfully");
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}