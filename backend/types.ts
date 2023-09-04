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

export interface SingleOrder {
  OrderID: string;
  OrderDate: string;
  ShippedDate: string;
  UnitPrice: number;
  Quantity: number;
  ProductName: string;
  CategoryName: string;
  Picture: Buffer;
}

interface OrderedProduct {
  totalPrice: number;
  pricePerItem: number;
  quantity: number;
  name: string;
  category: string;
  picture: Buffer;
}

export interface ModifiedSingleOrder {
  id: string;
  orderDate: string;
  shippedDate: string;
  products: OrderedProduct[];
}
