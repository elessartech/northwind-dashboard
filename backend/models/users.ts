import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export interface UserModelInterface {
  _id: string;
  name: string;
  passwordHash: string;
  email: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: String,
  passwordHash: String,
});

userSchema.plugin(uniqueValidator);

userSchema.set("toJSON", {
  transform: (_document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

export const User = mongoose.model<UserModelInterface>("User", userSchema);
