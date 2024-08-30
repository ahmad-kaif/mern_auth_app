import User from "../models/user.model.js";
import generaateTokenAndSetCookie from "../utils/generateToken.utils.js";


export const signup = async (req,res) => {
    try {
        const {fullname,username,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match"})
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"Passwords do not match"})
        }

        //hash password here
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
            generaateTokenAndSetCookie(newUser._id,res);

            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username
            })
        }else{
            return res.status(400).json({error: "Inavlid USer data"})
        }


    } catch (error) {
        console.log("error in sign up controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export const login =  async (req,res) => {
    res.send(`login  page`);
}

export const logout = async (req,res) => {
    // res.send(`logout  page`);
}