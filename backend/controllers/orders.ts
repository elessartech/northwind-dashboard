import express, { Response } from "express";

const router = express.Router();

import orderModel from "../models/orders";
import ordersService from "../services/ordersService";

router.get(
  "/",
  async (
    req: { query: { productName: string; shipped: boolean } },
    res: Response
  ) => {
    const productName = req.query.productName;
    const shipped = req.query.shipped;
    let orders;
    if (shipped) {
      orders = await orderModel.searchOnlyShippedOrdersByProductName(
        productName
      );
    } else {
      orders = await orderModel.searchAllOrdersByProductName(productName);
    }
    const modifiedOrderDataObj = ordersService.modifyOrderDataObj(orders);
    res.json(modifiedOrderDataObj);
  }
);

export default router;
