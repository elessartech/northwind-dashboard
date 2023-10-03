import express, { Request, Response } from "express";
import cors from "cors";
import orders from "./controllers/orders";
import login from "./controllers/login";
import statistics from "./controllers/statistics";
import middleware from "./util/middleware";

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
