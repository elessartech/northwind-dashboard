export interface Order {
  OrderID: string;
  ShipAddress: string;
  ContactName: string;
  ProductName: string;
  OrderDate: string;
  ShippedDate?: string;
}

interface OrderWithProductsAsList extends Omit<Order, "OrderID"|"ProductName"> {
  Products: string[];
}

export interface FormattedOrder {
  [OrderID: string]: OrderWithProductsAsList;
}