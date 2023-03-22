export interface Order {
  OrderID: string;
  ShipAddress: string;
  ContactName: string;
  ProductName: string;
  OrderDate: string;
  ShippedDate?: string;
}

export interface FormattedOrder extends Omit<Order, "ProductName"> {
  Products: string[];
}
