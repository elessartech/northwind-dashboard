import express, {Request, Response} from "express";

const router = express.Router();

import orderModel from "../models/orders";
import ordersService from "../services/ordersService";

router.get("/", async (_req: Request, res: Response) => {
  const allOrders = await orderModel.getAllOrders();
  const modifiedOrderDataObj = ordersService.modifyOrderDataObj(allOrders);
  res.json(modifiedOrderDataObj);
});

router.get("/search", async (req: { query: { productName: string } }, res: Response) => {
  const productNameParam = req.query.productName;
  const allOrders = await orderModel.searchOrdersByProductName(
    productNameParam
  );
  const modifiedOrderDataObj = ordersService.modifyOrderDataObj(allOrders);
  res.json(modifiedOrderDataObj);
});

export default router;
