import React from "react";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faDownload } from "@fortawesome/free-solid-svg-icons";

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
    margin-bottom: .75em;
`;

const OrderInfoStatus = styled.h4`
    font-size: 16px;
    font-weight: 400;
`;

const OrderDetailsWrapper = styled.div`
    margin-top: 2em;
`;

const OrderDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
`;

const OrderDetail = styled.div`
    display: flex;
    justify-content: space-between;
    margin: .5em 0;
`;

const OrderDetailCategory = styled.h4`
    text-align: left; 
`;

const OrderDetailValue = styled.span``;

const OrderDownloadBtnContainer = styled.div`
    margin-top: 2em;
`;

const OrderDownloadBtn = styled.button`
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
    return (
        <React.Fragment>
            <Navigation authUserNavToBeDisplayed />
            <Wrapper>
                <OrderStatusIcon icon={faCheckSquare}></OrderStatusIcon>
                <OrderStatus>Order Delivered</OrderStatus>
                <OrderInfoStatus>Order #220 was placed on June 13, 2013 and is currently <strong>Delivered</strong></OrderInfoStatus>
                <OrderDetailsWrapper>
                    <OrderDetailsContainer>
                        <OrderDetail>
                            <OrderDetailCategory>Ref number</OrderDetailCategory>
                            <OrderDetailValue>897239583479587384975</OrderDetailValue>
                        </OrderDetail>
                        <OrderDetail>
                            <OrderDetailCategory>Payment Time</OrderDetailCategory>
                            <OrderDetailValue>25-02-2023, 13:22:25</OrderDetailValue>
                        </OrderDetail>
                        <OrderDetail>
                            <OrderDetailCategory>Payment Method</OrderDetailCategory>
                            <OrderDetailValue>Bank Transfer</OrderDetailValue>
                        </OrderDetail>
                        <OrderDetail>
                            <OrderDetailCategory>Sender Name</OrderDetailCategory>
                            <OrderDetailValue>Antonio Roberto</OrderDetailValue>
                        </OrderDetail>
                        <OrderDetail>
                            <OrderDetailCategory>Amount</OrderDetailCategory>
                            <OrderDetailValue>524 euro</OrderDetailValue>
                        </OrderDetail>
                    </OrderDetailsContainer>
                    <OrderDownloadBtnContainer>
                        <OrderDownloadBtn><OrderDownloadIcon icon={faDownload} /> Download PDF</OrderDownloadBtn>
                    </OrderDownloadBtnContainer>
                </OrderDetailsWrapper>
            </Wrapper>
        </React.Fragment>
    );
};

export default OrderDetailsPage;