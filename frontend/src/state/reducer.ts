import { State } from "./state";
import { Order } from "../types";

export type Action =
  | {
      type: "SET_ORDERS_LIST";
      payload: Order[];
    }


export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ORDERS_LIST":
      return {
        ...state,
        orders: {
          ...action.payload,
          ...state.orders
        }
      };
    default:
      return state;
  }
};

export const setOrdersList = (orders: Order[]): Action => ({
  type: 'SET_ORDERS_LIST', 
  payload: orders  
}) 