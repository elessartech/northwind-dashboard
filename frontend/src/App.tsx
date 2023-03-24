import React from 'react';
import OrdersPage from './OrdersPage';
import { setOrdersList, useStateValue } from "./state";
import { apiBaseUrl } from './constants';
import { Order } from './types';
import axios from 'axios';

function App() {
  const [, dispatch] = useStateValue();
  React.useEffect(() => {
    const fetchOrdersList = async () => {
      try {
        const { data: ordersListFromApi } = await axios.get<Order[]>(
          `${apiBaseUrl}/orders`
        );
        dispatch(setOrdersList(ordersListFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    void fetchOrdersList();
  }, [dispatch]);
  return (
    <div className="App">
      <OrdersPage />
    </div>
  )
}

export default App;
