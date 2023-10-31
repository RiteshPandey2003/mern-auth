import User from "../model/user_model.js";
import bcrypt from "bcrypt";

export const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10)
  const newUser = new User({ username, email, password : hashPassword });
  try {
    await newUser.save();
    res.status(201).json({ msg: "User created succcessfully" });
  } catch (error) {
    next(error);
  }
};
