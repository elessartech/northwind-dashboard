import db from "../util/db";
import { Order } from "../types";

const searchAllOrdersByProductName = async (
  search: string
): Promise<Order[]> => {
  const selectStatement = db.prepare(
    "SELECT Orders.OrderID, Orders.ShipAddress, Orders.ShipCity, Orders.ShipPostalCode, Orders.ShipCountry, Customers.ContactName, Products.ProductName, Orders.ShippedDate FROM Orders, Customers, Products INNER JOIN 'Order Details' On Orders.OrderID='Order Details'.OrderID WHERE Orders.CustomerID=Customers.CustomerID AND 'Order Details'.ProductID = Products.ProductID AND Products.ProductName LIKE ?"
  );
  const orders: unknown[] = await selectStatement.all(`%${search}%`);
  const typedOrders = orders as Order[];
  return typedOrders;
};

const searchOnlyShippedOrdersByProductName = async (
  search: string
): Promise<Order[]> => {
  const selectStatement = db.prepare(
    `SELECT Orders.OrderID, Orders.ShipAddress, Orders.ShipCity, Orders.ShipPostalCode, Orders.ShipCountry, Customers.ContactName, Products.ProductName, Orders.ShippedDate FROM Orders, Customers, Products INNER JOIN 'Order Details' On Orders.OrderID='Order Details'.OrderID WHERE Orders.CustomerID=Customers.CustomerID AND 'Order Details'.ProductID = Products.ProductID AND Products.ProductName LIKE ? AND Orders.ShippedDate IS NOT NULL`
  );
  const orders: unknown[] = await selectStatement.all(`%${search}%`);
  const typedOrders = orders as Order[];
  return typedOrders;
};

export default {
  searchAllOrdersByProductName,
  searchOnlyShippedOrdersByProductName,
};
