import { useEffect, useState } from "react";
import { setOrdersList, useStateValue } from "../state";
import axios from "axios";
import { Order } from "../types";
import { apiBaseUrl } from "../constants";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Checkbox from "../components/Checkbox";
import OrdersList from "../components/OrdersList";
import styled from "styled-components";

const Wrapper = styled.section``;

const Main = styled.main``;

const SearchWrapper = styled.section`
  width: 100%;
  margin: 5em auto 0 auto;
  display: grid;
  justify-content: center;
`;

const OrdersWrapper = styled.section`
  width: 100%;
  margin: 2em auto;
  display: grid;
  justify-content: center;
`;

const OrdersPage = () => {
  const [productName, setProductName] = useState<string>("");
  const [shipped, setShipped] = useState<boolean>(false);
  const [{ orders }, dispatch] = useStateValue();
  useEffect(() => {
    const fetchOrdersList = async () => {
      try {
        const { data: ordersListFromApi } = await axios.get<Order>(
          `${apiBaseUrl}/orders/search`,
          { params: { productName: productName, shipped: shipped } }
        );
        dispatch(setOrdersList(ordersListFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    void fetchOrdersList();
  }, [productName, shipped, dispatch]);
  return (
    <Wrapper>
      <Logo />
      <Main>
        <SearchWrapper>
          <Search
            productName={productName}
            setProductName={(newProductName: string) =>
              setProductName(newProductName)
            }
          />
          <Checkbox
            shipped={shipped}
            setShipped={(newShipped: boolean) => setShipped(newShipped)}
          />
        </SearchWrapper>
        <OrdersWrapper>
          <OrdersList orders={orders} />
        </OrdersWrapper>
      </Main>
    </Wrapper>
  );
};

export default OrdersPage;
