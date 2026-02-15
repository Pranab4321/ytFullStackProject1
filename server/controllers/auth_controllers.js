const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("This is home page by router.");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }


  // Creating the user
    const createdUser = await User.create({
      username,
      email,
      phone,
      password,
    });

    console.log(createdUser);

    if (createdUser) {
      res
        .status(201)
        .json({
          data: "User created successfully",
          token: await createdUser.generateToken(),
          userId: createdUser._id.toString(),
        });
    }
  } catch (error) {
    res.status(500).json("internal server error");
    console.error(error);
  }
};


const login = async (req, res)=>{
  try {
  const {email, password} = req.body;
  // console.log(password);

  const userExist = await User.findOne({email: email});

  // console.log(userExist.password);

  if(!userExist){
    res.status(400).json({msg: "Invalid credentials"});
  }

  const user = await bcrypt.compare(password, userExist.password);
  // const user = await userExist.comparePassword(password);
  // console.log(user);

  if(user){
    res
        .status(200)
        .json({
          data: "Logged In successfully",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
  }else{
    res.status(401).json({msg: "Invlid email or password."})
  }

  } catch (error) {
    res.status(500).json("internal server error");
  }
}

module.exports = { home, register, login };
