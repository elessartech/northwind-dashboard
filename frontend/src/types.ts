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