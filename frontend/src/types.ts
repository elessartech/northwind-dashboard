export interface OrderWithProductsAsList {
  ShipAddress: string;
  ShipCity: string;
  ShipPostalCode: string;
  ShipCountry: string;
  ContactName: string;
  Products: string[];
  ShippedDate: string;
}

export interface Orders {
  [OrderID: string]: OrderWithProductsAsList;
}

export interface CheckboxProps {
  shipped: boolean;
  setShipped: Function;
}

export interface OrderListProps {
  orders: Orders;
}

export interface SearchProps {
  productName: string;
  setProductName: Function;
}

export interface LoggedInUser {
  name?: string;
  email?: string;
  token?: string;
}

export interface NavigationProps {
  authUserNavToBeDisplayed?: boolean;
}

interface OrderedProduct {
  totalPrice: number;
  pricePerItem: number;
  quantity: number;
  name: string;
  category: string;
  picture: Buffer;
}

export interface SingleOrder {
  id: string;
  orderDate: string;
  shippedDate: string;
  products: OrderedProduct[];
}

export interface CalendarChartData {
  value: number;
  day: string;
}

export interface PieChartData {
  value: number;
  label: string;
  id: string;
}
