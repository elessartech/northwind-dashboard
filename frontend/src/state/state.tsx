import {
  createContext,
  useContext,
  useReducer,
  Reducer,
  Dispatch,
  ReactElement,
} from "react";
import { Orders, SingleOrder } from "../types";

import { OrdersAction, OrderAction } from "./reducer";

export type State = {
  orders: Orders;
  order: SingleOrder;
};

const initialState: State = {
  orders: {},
  order: {} as SingleOrder,
};

export const StateContext = createContext<
  [State, Dispatch<OrdersAction | OrderAction>]
>([initialState, () => initialState]);

type StateProviderProps = {
  reducer: Reducer<State, OrdersAction | OrderAction>;
  children: ReactElement;
};

export const StateProvider = ({ reducer, children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
