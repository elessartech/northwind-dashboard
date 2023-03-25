export interface Order {
  OrderID: string;
  ShipAddress: string;
  ShipCity: string;
  ShipPostalCode: string;
  ShipCountry: string;
  ContactName: string;
  ProductName: string;
  ShippedDate?: string;
}

export interface OrderWithProductsAsList
  extends Omit<Order, "OrderID" | "ProductName"> {
  Products: string[];
}

export interface FormattedOrders {
  [OrderID: string]: OrderWithProductsAsList;
}
