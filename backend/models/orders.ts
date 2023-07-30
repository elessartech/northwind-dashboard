import db from "../util/db";
import { Order } from "../types";

const searchAllOrdersByProductName = async (
  search: string
): Promise<Order[]> => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT Orders.OrderID, Orders.ShipAddress, Orders.ShipCity, Orders.ShipPostalCode, Orders.ShipCountry, Customers.ContactName, Products.ProductName, Orders.ShippedDate FROM Orders, Customers, Products INNER JOIN 'Order Details' On Orders.OrderID='Order Details'.OrderID WHERE Orders.CustomerID=Customers.CustomerID AND 'Order Details'.ProductID = Products.ProductID AND Products.ProductName LIKE '%${search}%'`,
      (err, row: Order[]) => {
        if (err) reject(err);
        resolve(row);
      }
    );
  });
};

const searchOnlyShippedOrdersByProductName = async (
  search: string
): Promise<Order[]> => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT Orders.OrderID, Orders.ShipAddress, Orders.ShipCity, Orders.ShipPostalCode, Orders.ShipCountry, Customers.ContactName, Products.ProductName, Orders.ShippedDate FROM Orders, Customers, Products INNER JOIN 'Order Details' On Orders.OrderID='Order Details'.OrderID WHERE Orders.CustomerID=Customers.CustomerID AND 'Order Details'.ProductID = Products.ProductID AND Products.ProductName LIKE '%${search}%' AND Orders.ShippedDate IS NOT NULL`,
      (err, row: Order[]) => {
        if (err) reject(err);
        resolve(row);
      }
    );
  });
};

export default {
  searchAllOrdersByProductName,
  searchOnlyShippedOrdersByProductName,
};
