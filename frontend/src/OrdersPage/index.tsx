import React from "react";
import { useStateValue } from "../state";


const OrdersPage = () => {
  const [{ orders }] = useStateValue();
  console.log(orders)
  return (
        <section className='Wrapper'>
          <header className='LogoWrapper'>
            <span className='Logo'>Northwind</span>
          </header>
          <main>
            <section className='SearchWrapper'>
              <figure className='SearchContainer'>
                <label htmlFor='SearchBar' className='SearchBarLabel'>Filter orders by product name</label>
                <input type='text' name='productName' id='SearchBar' placeholder='Aniseed Syrup' />
              </figure>
              <figure className='CheckboxContainer'>
                <label className="CheckboxLabel">Show only shipped orders
                  <input type="checkbox" id='CheckboxShipOrders' />
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
                        </figure>
                        <figure className='OrdersListItemFigure'>
                          <h2>Customer name</h2>
                          <p>{order.ContactName}</p>
                        </figure>
                        <figure className='OrdersListItemFigure'>
                          <h2>Products</h2>
                          {order.Products.map((product: string) => (
                            <p>{product}</p>
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