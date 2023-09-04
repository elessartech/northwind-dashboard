import {
  Order,
  FormattedOrders,
  SingleOrder,
  ModifiedSingleOrder,
} from "../types";

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

const modifySingleOrderDataObj = (
  order: SingleOrder[]
): ModifiedSingleOrder => {
  const firstOrderedProduct = order[0];
  let modifiedOrder: ModifiedSingleOrder = {
    id: firstOrderedProduct.OrderID,
    orderDate: firstOrderedProduct.OrderDate,
    shippedDate: firstOrderedProduct.ShippedDate,
    products: [],
  };
  modifiedOrder.products = order.map((orderedItem: SingleOrder) => ({
    totalPrice: orderedItem.UnitPrice * orderedItem.Quantity,
    pricePerItem: orderedItem.UnitPrice,
    quantity: orderedItem.Quantity,
    name: orderedItem.ProductName,
    category: orderedItem.CategoryName,
    picture: orderedItem.Picture,
  }));
  return modifiedOrder;
};

export default {
  modifyOrderDataObj,
  modifySingleOrderDataObj,
};
