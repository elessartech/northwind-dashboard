import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {findUser} from "../services/userService"
const router = express.Router();


router.post("/", async (request: Request, response: Response) => {
  const body = request.body;
  const receivedEmail = body.email
  const receivedPassword = body.password

  const user = await findUser(receivedEmail);
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(receivedPassword, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userForToken, "SECRET");

  return response
    .status(200)
    .send({ token, email: user.email, name: user.name });
});

export default router;