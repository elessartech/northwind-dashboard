export interface OrderWithProductsAsList {
    ShipAddress?: string;
    ShipCity?: string;
    ShipPostalCode?: string;
    ShipCountry?: string;
    ContactName?: string;
    Products?: string[];
    OrderDate?: string;
    ShippedDate?: string;
}


export interface Order {
    [OrderID: string]: OrderWithProductsAsList;
}
  