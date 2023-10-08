import express, { Response, Request } from "express";

const router = express.Router();

import orderModel from "../models/orders";

router.get(
  "/number-of-orders-throughout-timeline",
  async (_req: Request, res: Response) => {
    const numberOfOrdersThroughoutTimeline =
      await orderModel.findNumberOfOrdersThroughoutTimeline();
    res.json(numberOfOrdersThroughoutTimeline);
  }
);

router.get(
  "/number-of-orders-by-country",
  async (_req: Request, res: Response) => {
    const numberOfOrdersByCountry =
      await orderModel.findNumberOfOrdersByCountry();
    res.json(numberOfOrdersByCountry);
  }
);

router.get("/most-saled-product", async (_req: Request, res: Response) => {
  const mostSaledProductData = await orderModel.findMostSaledProduct();
  res.json(mostSaledProductData);
});

router.get(
  "/most-saled-product-per-item",
  async (_req: Request, res: Response) => {
    const mostSaledProductPerItemData =
      await orderModel.findMostSaledProductPerItem();
    res.json(mostSaledProductPerItemData);
  }
);

router.get("/most-saled-category", async (_req: Request, res: Response) => {
  const mostSaledCategoryData = await orderModel.findMostSaledCategory();
  res.json(mostSaledCategoryData);
});

export default router;
