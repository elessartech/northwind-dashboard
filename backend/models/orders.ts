import db from "../util/db";
import { Order, SingleOrder } from "../types";

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

const findForIndividualOrderInfo = async (
  orderId: string
): Promise<SingleOrder[]> => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT Orders.OrderID, Orders.OrderDate, Orders.ShippedDate, 'Order Details'.UnitPrice, 'Order Details'.Quantity, Products.ProductName, Categories.CategoryName, Categories.Picture FROM Orders, Products, Categories INNER JOIN 'Order Details' On Orders.OrderID='Order Details'.OrderID WHERE 'Order Details'.ProductID = Products.ProductID AND Products.CategoryID=Categories.CategoryID AND 'Order Details'.OrderID=${orderId}`,
      (err, row: SingleOrder[]) => {
        if (err) reject(err);
        resolve(row);
      }
    );
  });
};

const findNumberOfOrdersThroughoutTimeline = async (): Promise<SingleOrder[]> => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT COUNT(Orders.OrderID) AS value, Orders.OrderDate AS day FROM Orders GROUP BY Orders.OrderDate;`,
      (err, row: SingleOrder[]) => {
        if (err) reject(err);
        resolve(row);
      }
    );
  });
};


const findNumberOfOrdersByCountry = async (): Promise<SingleOrder[]> => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT COUNT(Orders.OrderID) as value, Orders.ShipCountry as label, Orders.ShipCountry as id FROM Orders GROUP BY Orders.ShipCountry;`,
      (err, row: SingleOrder[]) => {
        if (err) reject(err);
        resolve(row);
      }
    );
  });
};

export default {
  searchAllOrdersByProductName,
  searchOnlyShippedOrdersByProductName,
  findForIndividualOrderInfo,
  findNumberOfOrdersThroughoutTimeline,
  findNumberOfOrdersByCountry
};
