export interface OrderWithProductsAsList {
  ShipAddress: string;
  ShipCity: string;
  ShipPostalCode: string;
  ShipCountry: string;
  ContactName: string;
  Products: string[];
  OrderDate: string;
  ShippedDate: string;
}

export interface Order {
  [OrderID: string]: OrderWithProductsAsList;
}

export interface CheckboxProps {
  shipped: boolean;
  setShipped: Function;
}

export interface OrderListProps {
  orders: Order;
}

export interface SearchProps {
  productName: string;
  setProductName: Function;
}
