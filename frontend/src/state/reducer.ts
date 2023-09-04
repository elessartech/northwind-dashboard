import { State } from "./state";
import { Orders, SingleOrder } from "../types";

export type OrdersAction = {
  type: "SET_ORDERS";
  payload: Orders;
};

export type OrderAction = {
  type: "SET_ORDER";
  payload: SingleOrder;
};

export const reducer = (
  state: State,
  action: OrdersAction | OrderAction
): State => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        orders: {
          ...action.payload,
        },
        order: { ...state.order },
      };
    case "SET_ORDER":
      return {
        orders: {
          ...state.orders,
        },
        order: { ...action.payload },
      };
    default:
      return state;
  }
};

export const setOrdersList = (orders: Orders): OrdersAction => ({
  type: "SET_ORDERS",
  payload: orders,
});

export const setOrder = (order: SingleOrder): OrderAction => ({
  type: "SET_ORDER",
  payload: order,
});
