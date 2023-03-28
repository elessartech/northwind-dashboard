import { State } from "./state";
import { Orders } from "../types";

export type Action = {
  type: "SET_ORDERS";
  payload: Orders;
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        orders: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export const setOrdersList = (orders: Orders): Action => ({
  type: "SET_ORDERS",
  payload: orders,
});
