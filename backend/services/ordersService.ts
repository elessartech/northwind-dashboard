import { Order, FormattedOrders } from "../types";

const modifyOrderDataObj = (allOrders: Order[]): FormattedOrders => {
  const dataObj: FormattedOrders = {};
  allOrders.forEach((order: Order) => {
    if (Object.prototype.hasOwnProperty.call(dataObj, order.OrderID)) {
      dataObj[order.OrderID].Products.push(order.ProductName);
    } else {
      dataObj[order.OrderID] = {
        ShipAddress: order.ShipAddress,
        ShipCity: order.ShipCity,
        ShipPostalCode: order.ShipPostalCode,
        ShipCountry: order.ShipCountry,
        ContactName: order.ContactName,
        Products: [order.ProductName],
        ShippedDate: order.ShippedDate,
      };
    }
  });
  return dataObj;
};

export default {
  modifyOrderDataObj,
};
