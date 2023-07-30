import { User, UserModelInterface } from "../models/users";
import bcrypt from "bcrypt";

const findUser = async (email: string): Promise<UserModelInterface | null> => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw error;
  }
};

const saveUser = async (
  name: string,
  email: string,
  password: string
): Promise<UserModelInterface | null> => {
  const alreadyExistingUser = await User.findOne({ email });
  if (alreadyExistingUser) {
    return null;
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = new User({
    email,
    name,
    passwordHash,
  });

  const savedUser = await user.save();
  return savedUser;
};

export { findUser, saveUser };
