import styled from "styled-components";
import { OrderListProps, OrderWithProductsAsList } from "../types";

const OrdersListUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const OrdersListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 2em auto;
  width: 100%;
  @media only screen and (max-width: 800px) {
    & {
      flex-direction: column;
      text-align: center;
    }
  }
`;

const OrdersListItemFigure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0 1em;
  width: 100%;
  &:first-child {
    margin: auto 1.5em;
    color: rgb(255, 255, 255, 0.5);
    font-size: 2em;
  }

  &:last-child {
    margin: auto 1.5em;
    color: #ffffff;
    background: #b54139;
    border: none;
    padding: 0.75em 0.5em;
    max-width: 150px;
    border-radius: 20px;
    font-size: 1em;
    text-decoration: none;
    text-align: center;
  }

  @media only screen and (max-width: 800px) {
    & {
      margin: 0.75em auto;
    }

    &:first-child,
    &:last-child {
      margin: 0.5em auto;
    }

    &:last-child a,
    &:first-child span {
      margin: auto;
    }
  }
`;

const OrdersListHeader = styled.h2`
  color: #b54139;
  margin-bottom: 0.5em;
  font-size: 1em;
`;

const OrdersListItemId = styled.span``;

const OrdersListText = styled.p``;

const ViewDetailsLink = styled.a`
  color: #ffffff;
  background: #b54139;
  border: none;
  padding: 0.25em;
  max-width: 150px;
  border-radius: 20px;
  font-size: 1em;
  text-decoration: none;
  text-align: center;
`;

const OrdersList = ({ orders }: OrderListProps) => {
  // func
  return (
    <OrdersListUl>
      {Object.entries(orders).map(
        (orderEntries: [string, OrderWithProductsAsList], idx: number) => {
          const orderId = orderEntries[0];
          const order = orderEntries[1];
          const orderIdHref = "order/".concat(orderId);
          return (
            <OrdersListItem key={idx}>
              <OrdersListItemFigure>
                <OrdersListItemId>#{orderId}</OrdersListItemId>
              </OrdersListItemFigure>
              <OrdersListItemFigure>
                <OrdersListHeader>Shipping address</OrdersListHeader>
                <OrdersListText>{order.ShipAddress}</OrdersListText>
                <OrdersListText>
                  {order.ShipCity} {order.ShipPostalCode}
                </OrdersListText>
                <OrdersListText>{order.ShipCountry}</OrdersListText>
              </OrdersListItemFigure>
              <OrdersListItemFigure>
                <OrdersListHeader>Customer name</OrdersListHeader>
                <OrdersListText>{order.ContactName}</OrdersListText>
              </OrdersListItemFigure>
              <OrdersListItemFigure>
                <OrdersListHeader>Products</OrdersListHeader>
                {order.Products.map((product: string, i: number) =>
                  i <= 2 ? (
                    <OrdersListText key={i}>{product}</OrdersListText>
                  ) : i === 3 ? (
                    <OrdersListText key={i}>
                      + {order.Products.length - 3} more...
                    </OrdersListText>
                  ) : null
                )}
              </OrdersListItemFigure>
              <OrdersListItemFigure>
                <ViewDetailsLink href={orderIdHref}>
                  View Details
                </ViewDetailsLink>
              </OrdersListItemFigure>
            </OrdersListItem>
          );
        }
      )}
    </OrdersListUl>
  );
};
export default OrdersList;
