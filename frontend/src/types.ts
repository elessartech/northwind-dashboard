interface OrderWithProductsAsList {
    ShipAddress: string;
    ContactName: string;
    Products: string[];
    OrderDate: string;
    ShippedDate?: string;
}


export interface Order {
    [OrderID: string]: OrderWithProductsAsList;
}
  