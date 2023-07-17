import React, { useEffect, useState } from "react";
import { setOrdersList, useStateValue } from "../state";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Orders } from "../types";
import { apiBaseUrl } from "../constants";
import Search from "../components/Search";
import Checkbox from "../components/Checkbox";
import OrdersList from "../components/OrdersList";
import Spinner from "../components/Spinner";
import styled from "styled-components";

const Wrapper = styled.section`
  margin: 5em auto 0 auto;
  width: 100%;
`;

const SearchWrapper = styled.section`
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
  const [loading, setLoading] = useState<boolean>(true);
  const [{ orders }, dispatch] = useStateValue();
  const navigate = useNavigate();
  useEffect(() => {
    if (loading)  {
      const loggedUserJSON = window.localStorage.getItem("loggedInNorthwindUser");
      if (!loggedUserJSON) {
          navigate('/');
      }
    }
  }, [loading]);

  useEffect(() => {
    const fetchOrdersList = async () => {
      try {
        const { data: ordersListFromApi } = await axios.get<Orders>(
          `${apiBaseUrl}/orders`,
          { params: { productName: productName, shipped: shipped } }
        );
        dispatch(setOrdersList(ordersListFromApi));
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    void fetchOrdersList();
  }, [productName, shipped, dispatch]);

  return (
    <Wrapper>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default OrdersPage;
