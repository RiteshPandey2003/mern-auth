import User from "../model/user_model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../util/error.js";
import jwt from "jsonwebtoken";

export const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ msg: "User created succcessfully" });
  } catch (error) {
    next(error);
  }
};

export const SingIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "invalid credentials"));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashPassword, ...rest } = validUser._doc;
    const expiredate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiredate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ emaii: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = validUser._doc;
      const expiredate = new Date(Date.now() + 3600000);
      res.cookie("access_token", token, {
        httpOnly: true,
        expires: expiredate,
      })
      .status(200)
      .json(rest);
    } else {
      const gentratePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashedPassword = bcrypt.hashSync(gentratePassword, 10);
      const newUser = new User({
        username: req.body.name.split(" ").join("").toLowercase()+Math.random().toString(36).slice(-8),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.imageURL,
      });
      await newUser.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...rest } = newUser._doc;
      const expiredate = new Date(Date.now() + 3600000);
      res.cookie("access_token", token, {
        httpOnly: true,
        expires: expiredate,
      })
      .status(200)
      .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
