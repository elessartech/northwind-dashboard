import db from "../util/db";
import { CalendarChartData, Order, PieChartData, SingleOrder } from "../types";

const searchAllOrdersByProductName = async (
  search: string
): Promise<Order[] | null> => {
  const query = `
  SELECT Orders.OrderID, Orders.ShipAddress, Orders.ShipCity, Orders.ShipPostalCode, Orders.ShipCountry,
  Customers.ContactName, Products.ProductName, Orders.ShippedDate
  FROM Orders, Customers, Products
  INNER JOIN 'Order Details' ON Orders.OrderID = 'Order Details'.OrderID
  WHERE Orders.CustomerID = Customers.CustomerID
  AND 'Order Details'.ProductID = Products.ProductID
  AND Products.ProductName LIKE ?`;
  const result: Order[] = await new Promise((resolve, reject) => {
    db.all(query, [`%${search}%`], (err, rows: Order[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return result;
};

const searchOnlyShippedOrdersByProductName = async (
  search: string
): Promise<Order[] | null> => {
  const query = `
  SELECT Orders.OrderID, Orders.ShipAddress, Orders.ShipCity, Orders.ShipPostalCode, Orders.ShipCountry,
  Customers.ContactName, Products.ProductName, Orders.ShippedDate
  FROM Orders, Customers, Products
  INNER JOIN 'Order Details' ON Orders.OrderID = 'Order Details'.OrderID
  WHERE Orders.CustomerID = Customers.CustomerID
  AND 'Order Details'.ProductID = Products.ProductID
  AND Products.ProductName LIKE ?
  AND Orders.ShippedDate IS NOT NULL`;
  const result: Order[] = await new Promise((resolve, reject) => {
    db.all(query, [`%${search}%`], (err, rows: Order[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return result;
};

const findForIndividualOrderInfo = async (
  orderId: string
): Promise<SingleOrder[] | null> => {
  const query = `
    SELECT Orders.OrderID, Orders.OrderDate, Orders.ShippedDate, 'Order Details'.UnitPrice, 'Order Details'.Quantity,
    Products.ProductName, Categories.CategoryName, Categories.Picture
    FROM Orders, Products, Categories
    INNER JOIN 'Order Details' ON Orders.OrderID = 'Order Details'.OrderID
    WHERE 'Order Details'.ProductID = Products.ProductID
    AND Products.CategoryID = Categories.CategoryID
    AND 'Order Details'.OrderID = ?`;
  const result: SingleOrder[] = await new Promise((resolve, reject) => {
    db.all(query, [`${orderId}`], (err, rows: SingleOrder[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return result;
};

const findNumberOfOrdersThroughoutTimeline = async (): Promise<
  CalendarChartData[] | null
> => {
  const query = `SELECT COUNT(Orders.OrderID) AS value, Orders.OrderDate AS day FROM Orders GROUP BY Orders.OrderDate;`;
  const result: CalendarChartData[] = await new Promise((resolve, reject) => {
    db.all(query, [], (err, rows: CalendarChartData[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return result;
};

const findNumberOfOrdersByCountry = async (): Promise<
  PieChartData[] | null
> => {
  const query = `SELECT COUNT(Orders.OrderID) as value, Orders.ShipCountry as label, Orders.ShipCountry as id FROM Orders GROUP BY Orders.ShipCountry;`;
  const result: PieChartData[] = await new Promise((resolve, reject) => {
    db.all(query, [], (err, rows: PieChartData[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return result;
};

const findMostSaledProduct = async (): Promise<PieChartData[] | null> => {
  const query = `SELECT COUNT('Order Details'.ProductID) as value, Products.ProductName as id, Products.ProductID as label FROM 'Order Details' INNER JOIN Products on Products.ProductID='Order Details'.ProductID GROUP BY Products.ProductName;`;
  const result: PieChartData[] = await new Promise((resolve, reject) => {
    db.all(query, [], (err, rows: PieChartData[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return result;
};

const findMostSaledProductPerItem = async (): Promise<
  PieChartData[] | null
> => {
  const query = `SELECT CAST(ROUND(SUM('Order Details'.UnitPrice)) as INT) as value, Products.ProductName as id, Products.ProductID as label FROM 'Order Details' INNER JOIN Products on Products.ProductID='Order Details'.ProductID GROUP BY Products.ProductName;`;
  const result: PieChartData[] = await new Promise((resolve, reject) => {
    db.all(query, [], (err, rows: PieChartData[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return result;
};

const findMostSaledCategory = async (): Promise<PieChartData[] | null> => {
  const query = `SELECT COUNT('Order Details'.ProductID) as value, Categories.CategoryName as id, Categories.CategoryID as label FROM Products INNER JOIN 'Order Details'on Products.ProductID='Order Details'.ProductID INNER JOIN Categories ON Categories.CategoryID=Products.CategoryID GROUP BY Categories.CategoryName;`;
  const result: PieChartData[] = await new Promise((resolve, reject) => {
    db.all(query, [], (err, rows: PieChartData[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return result;
};

export default {
  searchAllOrdersByProductName,
  searchOnlyShippedOrdersByProductName,
  findForIndividualOrderInfo,
  findNumberOfOrdersThroughoutTimeline,
  findNumberOfOrdersByCountry,
  findMostSaledProduct,
  findMostSaledProductPerItem,
  findMostSaledCategory,
};
