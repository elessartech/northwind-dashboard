import express, { Request, Response } from "express";
import cors from "cors";
import orders from "./controllers/orders";
import login from "./controllers/login";
import statistics from "./controllers/statistics";
import middleware from "./util/middleware";
import mongoose, { ConnectOptions } from "mongoose";
import config from "./util/config";
import { findUser, saveUser } from "./services/userService";

const connectToDb = async () => {
  await mongoose
    .connect(config.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => console.log("Successfully connected to the mongo database"))
    .then(async () => {
      if (config.ADMIN_EMAIL && config.ADMIN_NAME && config.ADMIN_PASSWORD) {
        const userAlreadyExists = await findUser(config.ADMIN_EMAIL);
        if (!userAlreadyExists) {
          await saveUser(
            config.ADMIN_NAME,
            config.ADMIN_EMAIL,
            config.ADMIN_PASSWORD
          );
        }
      }
    });
};

void connectToDb();

const app = express();
app.use(express.json());
app.use(cors<Request>());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.get("/api/ping", (_req: Request, res: Response): void => {
  res.send({ message: "pong" });
});

app.use("/api/orders", orders);
app.use("/api/login", login);
app.use("/api/statistics", statistics);

export default app;
