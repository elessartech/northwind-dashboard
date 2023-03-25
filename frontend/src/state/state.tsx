import {
  createContext,
  useContext,
  useReducer,
  Reducer,
  Dispatch,
  ReactElement,
} from "react";
import { Order } from "../types";

import { Action } from "./reducer";

export type State = {
  orders: Order;
};

const initialState: State = {
  orders: {},
};

export const StateContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => initialState,
]);

type StateProviderProps = {
  reducer: Reducer<State, Action>;
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
