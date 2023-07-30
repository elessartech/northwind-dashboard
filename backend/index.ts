import mongoose, { ConnectOptions } from "mongoose";
import app from "./app";
import config from "./util/config";
import { findUser, saveUser } from "./services/userService";

const start = () => {
  mongoose
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
    })
    .then(() =>
      app.listen(config.PORT, () => {
        console.log(`Server running on port ${config.PORT}`);
      })
    )
    .catch((error) => console.log(error.message));
};

void start();
