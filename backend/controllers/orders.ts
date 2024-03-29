import express, { Response } from "express";

const router = express.Router();

import orderModel from "../models/orders";
import ordersService from "../services/ordersService";

router.get(
  "/",
  async (
    req: { query: { productName: string; shipped: string } },
    res: Response
  ) => {
    const productName = req.query.productName;
    const shipped = JSON.parse(req.query.shipped);
    let orders;
    if (shipped) {
      orders = await orderModel.searchOnlyShippedOrdersByProductName(
        productName
      );
    } else {
      orders = await orderModel.searchAllOrdersByProductName(productName || "");
    }
    if (orders) {
      const modifiedOrderDataObj = ordersService.modifyOrderDataObj(orders);
      res.json(modifiedOrderDataObj);
    }
  }
);

router.get(
  "/:orderId",
  async (
    req: {
      params: any;
      query: { productName: string; shipped: string };
    },
    res: Response
  ) => {
    const orderId = req.params.orderId;
    const orderedProducts = await orderModel.findForIndividualOrderInfo(
      orderId
    );
    if (orderedProducts) {
      const modifiedOrderDataObj =
        ordersService.modifySingleOrderDataObj(orderedProducts);
      res.json(modifiedOrderDataObj);
    }
  }
);

export default router;
