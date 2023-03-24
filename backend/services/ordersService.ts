import { Order, FormattedOrder } from "../types";

const modifyOrderDataObj = (allOrders: Order[]): FormattedOrder => {
  const dataObj: FormattedOrder = {};
  allOrders.forEach((order: Order) => {
    if (dataObj.hasOwnProperty(order.OrderID)) {
      dataObj[order.OrderID].Products.push(order.ProductName);
    } else {
      dataObj[order.OrderID] = {
        ShipAddress: order.ShipAddress,
        ContactName: order.ContactName,
        Products: [order.ProductName],
        OrderDate: order.OrderDate,
        ShippedDate: order.ShippedDate,
      };
    }
  });
  return dataObj;
};

export default {
  modifyOrderDataObj,
};
