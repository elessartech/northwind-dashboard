import { State } from "./state";
import {  OrderWithProductsAsList } from "../types";

export type Action =
  | {
      type: "SET_ORDERS";
      payload: OrderWithProductsAsList;
    }


export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        orders: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export const setOrdersList = (orders: OrderWithProductsAsList): Action => ({
  type: 'SET_ORDERS', 
  payload: orders  
}) 