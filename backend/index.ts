import app from "./app";
import config from "./util/config";


const start = async () => {
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
};

void start();
