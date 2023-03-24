import { useEffect, useState } from "react";
import { setOrdersList, useStateValue } from "../state";
import axios from "axios";
import { OrderWithProductsAsList } from "../types";
import { apiBaseUrl } from "../constants";


const OrdersPage = () => {
  const [productName, setProductName] = useState("");
  const [shipped, setShipped] = useState(false)
  const [{ orders }, dispatch] = useStateValue();
  useEffect(() => {
    const fetchOrdersList = async () => {
      try {
        const { data: ordersListFromApi } = await axios.get<OrderWithProductsAsList>(
          `${apiBaseUrl}/orders/search`, { params: { productName: productName, shipped: shipped } }
        );
        console.log(ordersListFromApi)
        dispatch(setOrdersList(ordersListFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    void fetchOrdersList();
  }, [productName, shipped, dispatch])
  return (
        <section className='Wrapper'>
          <header className='LogoWrapper'>
            <span className='Logo'>Northwind</span>
          </header>
          <main>
            <section className='SearchWrapper'>
              <figure className='SearchContainer'>
                <label htmlFor='SearchBar' className='SearchBarLabel'>Filter orders by product name</label>
                <input type='text' value={productName} onChange={(event) => setProductName(event.target.value)} name='productName' id='SearchBar' placeholder='Aniseed Syrup' />
              </figure>
              <figure className='CheckboxContainer'>
                <label className="CheckboxLabel">Show only shipped orders
                  <input type="checkbox" id='CheckboxShipOrders' checked={shipped} onChange={() => setShipped(!shipped)} />
                  <span className="Checkmark"></span> 
                </label>
              </figure>
            </section>
            <section className='OrdersWrapper'>
              <ul className='OrdersList'>
                {
                  Object.entries(orders).map((orderEntries: any) => {
                    const orderId = orderEntries[0]
                    const order = orderEntries[1]
                    const orderIdHref = 'order/'.concat(orderId)
                    return (
                      <li className='OrdersListItem'>
                        <figure className='OrdersListItemFigure'>
                          <span>#{orderId}</span>
                        </figure>
                        <figure className='OrdersListItemFigure'>
                          <h2>Shipping address</h2>
                          <p>{order.ShipAddress}</p>
                          <p>{order.ShipCity} {order.ShipPostalCode}</p>
                          <p>{order.ShipCountry}</p>
                        </figure>
                        <figure className='OrdersListItemFigure'>
                          <h2>Customer name</h2>
                          <p>{order.ContactName}</p>
                        </figure>
                        <figure className='OrdersListItemFigure'>
                          <h2>Products</h2>
                          {order.Products.map((product: string, i: number) => (
                             i <= 2 ? <p>{product}</p> : i === 3 ? <p>+ {order.Products.length - 3} more...</p> : null
                          ))}
                        </figure>
                        <figure className='OrdersListItemFigure'>
                          <a href={orderIdHref}>View Details</a>
                        </figure>
                      </li>
                    )
                  })
                }
              </ul>
            </section>
          </main>
        </section>
      );
}


export default OrdersPage