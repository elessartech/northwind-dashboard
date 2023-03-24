import db from "../util/db";
import { Order } from "../types";

const getAllOrders = async (): Promise<Order[]> => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT Orders.OrderID, Orders.ShipAddress, Orders.ShipCity, Orders.ShipPostalCode, Orders.ShipCountry, Customers.ContactName, Products.ProductName, Orders.ShippedDate FROM Orders, Customers, Products INNER JOIN 'Order Details' On Orders.OrderID='Order Details'.OrderID WHERE Orders.CustomerID=Customers.CustomerID AND 'Order Details'.ProductID = Products.ProductID`,
      (err, row: Order[]) => {
        if (err) reject(err);
        resolve(row);
      }
    );
  });
};

const searchOrdersByProductName = async (search: string): Promise<Order[]> => {
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

export default { getAllOrders, searchOrdersByProductName };
