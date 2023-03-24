import express, { Request, Response } from "express";
import cors from "cors";
import orders from "./controllers/orders";
import middleware from "./util/middleware";

const app = express();
app.use(express.json());
app.use(cors<Request>());
app.use(middleware.requestLogger);

app.get("/api/ping", (_req: Request, res: Response): void => {
    res.send({message: "pong"});
});

app.use("/api/orders", orders);


export default app
