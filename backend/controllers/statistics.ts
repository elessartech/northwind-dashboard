import express, { Response, Request } from "express";

const router = express.Router();

import orderModel from "../models/orders";

router.get(
  "/number-of-orders-throughout-timeline",
  async (
    _req: Request,
    res: Response
  ) => {
    const numberOfOrdersThroughoutTimeline = await orderModel.findNumberOfOrdersThroughoutTimeline()
    res.json(numberOfOrdersThroughoutTimeline);
  }
);

router.get(
  "/number-of-orders-by-country",
  async (
    _req: Request,
    res: Response
  ) => {
    const numberOfOrdersByCountry = await orderModel.findNumberOfOrdersByCountry()
    res.json(numberOfOrdersByCountry);
  }
);

export default router;
