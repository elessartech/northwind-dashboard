import { State } from "./state";
import {  Order } from "../types";

export type Action =
  | {
      type: "SET_ORDERS";
      payload: Order;
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

export const setOrdersList = (orders: Order): Action => ({
  type: 'SET_ORDERS', 
  payload: orders  
}) 