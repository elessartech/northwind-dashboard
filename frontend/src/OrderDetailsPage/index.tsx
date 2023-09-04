import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { setOrder, useStateValue } from "../state";
import axios from "axios";
import { SingleOrder } from "../types";
import { apiBaseUrl } from "../constants";
import { Buffer } from "buffer";
import { CSVLink } from "react-csv";

const Wrapper = styled.section`
  margin: 5em auto 0 auto;
  width: 100%;
  text-align: center;
`;

const OrderStatusIcon = styled(FontAwesomeIcon)`
  height: 50px;
  width: 50px;
  color: rgb(181, 65, 57);
  margin-bottom: 2em;
`;

const OrderStatus = styled.h1`
  margin-bottom: 0.75em;
`;

const OrderInfoStatus = styled.h4`
  font-size: 16px;
  font-weight: 400;
`;

const OrderDetailsWrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: auto auto auto;
  @media only screen and (max-width: 800px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`;

const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 2em auto;
`;

const OrderDetailImg = styled.img``;

const OrderDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
`;

const OrderDetailCategory = styled.h4`
  text-align: left;
`;

const OrderDetailValue = styled.span``;

const OrderDownloadBtnContainer = styled.div`
  padding-top: 2em;
  padding-bottom: 4em;
`;

const OrderDownloadBtn = styled(CSVLink)`
  margin: auto;
  color: rgb(255, 255, 255);
  background: rgb(181, 65, 57);
  border: none;
  padding: 0.75em 0.5em;
  width: 200px;
  border-radius: 8px;
  font-size: 1em;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const OrderDownloadIcon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
`;

const OrderDetailsPage = () => {
  const [{ order }, dispatch] = useStateValue();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      const loggedUserJSON = window.localStorage.getItem(
        "loggedInNorthwindUser"
      );
      if (!loggedUserJSON) {
        navigate("/");
      }
    }
  }, [loading]);

  useEffect(() => {
    const fetchOrdersList = async () => {
      try {
        const orderId = window.location.pathname.split("/")[2];
        const { data: orderData } = await axios.get<SingleOrder>(
          `${apiBaseUrl}/orders/${orderId}`
        );
        dispatch(setOrder(orderData));
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    void fetchOrdersList();
  }, [dispatch]);

  return (
    <React.Fragment>
      <Navigation authUserNavToBeDisplayed />
      <Wrapper>
        <OrderStatusIcon icon={faCheckSquare}></OrderStatusIcon>
        <OrderStatus>Order #{order.id}</OrderStatus>
        <OrderInfoStatus>
          Order #{order.id} was placed on {order.orderDate} and{" "}
          {order.shippedDate
            ? `shipped on ${order.shippedDate}`
            : `was not yet shipped`}
        </OrderInfoStatus>
        <OrderDetailsWrapper>
          {!loading &&
            order.products.map((orderedProduct, idx) => {
              const buf = Buffer.from(orderedProduct.picture);
              const base64 = buf.toString("base64");
              return (
                <OrderDetailsContainer key={idx}>
                  <OrderDetailImg
                    src={`data: image/png; base64, ${base64}`}
                    width={400}
                    height={200}
                  />
                  <OrderDetail>
                    <OrderDetailCategory>Product Name</OrderDetailCategory>
                    <OrderDetailValue>{orderedProduct.name}</OrderDetailValue>
                  </OrderDetail>
                  <OrderDetail>
                    <OrderDetailCategory>Category</OrderDetailCategory>
                    <OrderDetailValue>
                      {orderedProduct.category}
                    </OrderDetailValue>
                  </OrderDetail>
                  <OrderDetail>
                    <OrderDetailCategory>Price per Item</OrderDetailCategory>
                    <OrderDetailValue>
                      {orderedProduct.pricePerItem} euro
                    </OrderDetailValue>
                  </OrderDetail>
                  <OrderDetail>
                    <OrderDetailCategory>Quantity</OrderDetailCategory>
                    <OrderDetailValue>
                      {orderedProduct.quantity}
                    </OrderDetailValue>
                  </OrderDetail>
                  <OrderDetail>
                    <OrderDetailCategory>Total Price</OrderDetailCategory>
                    <OrderDetailValue>
                      {orderedProduct.totalPrice} euro
                    </OrderDetailValue>
                  </OrderDetail>
                </OrderDetailsContainer>
              );
            })}
        </OrderDetailsWrapper>
        {!loading ? (
          <OrderDownloadBtnContainer>
            <OrderDownloadBtn
              data={order.products.map((product) => ({
                id: order.id,
                orderData: order.orderDate,
                shippedDate: order.shippedDate,
                category: product.category,
                name: product.name,
                totalPrice: product.totalPrice,
                pricePerItem: product.pricePerItem,
                quantity: product.quantity,
              }))}
              target="_blank"
            >
              <OrderDownloadIcon icon={faDownload} /> Download CSV
            </OrderDownloadBtn>
          </OrderDownloadBtnContainer>
        ) : null}
      </Wrapper>
    </React.Fragment>
  );
};

export default OrderDetailsPage;
