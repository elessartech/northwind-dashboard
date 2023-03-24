import React from "react";


const OrdersPage = () => {
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
                <li className='OrdersListItem'>
                  <figure className='OrdersListItemFigure'>
                    <span>#1</span>
                  </figure>
                  <figure className='OrdersListItemFigure'>
                    <h2>Shipping address</h2>
                    <p>59 rue de l-Abbaye</p>
                    <p>Reims 51100</p>
                    <p>France</p>
                  </figure>
                  <figure className='OrdersListItemFigure'>
                    <h2>Customer name</h2>
                    <p>Maria Anders</p>
                  </figure>
                  <figure className='OrdersListItemFigure'>
                    <h2>Products</h2>
                    <p>Chef Antons Cajun Seasoning</p>
                    <p>Chef Antons Cajun Seasoning</p>
                    <p>Chef Antons Cajun Seasoning</p>
                    <p>+ 4 more...</p>
                  </figure>
                  <figure className='OrdersListItemFigure'>
                    <button>View Details</button>
                  </figure>
                </li>
                <li className='OrdersListItem'>
                  <figure className='OrdersListItemFigure'>
                    <span>#2</span>
                  </figure>
                  <figure className='OrdersListItemFigure'>
                    <h2>Shipping address</h2>
                    <p>59 rue de l-Abbaye</p>
                    <p>Reims 51100</p>
                    <p>France</p>
                  </figure>
                  <figure className='OrdersListItemFigure'>
                    <h2>Customer name</h2>
                    <p>Maria Anders</p>
                  </figure>
                  <figure className='OrdersListItemFigure'>
                    <h2>Products</h2>
                    <p>Chef Antons Cajun Seasoning</p>
                    <p>Chef Antons Cajun Seasoning</p>
                    <p>Chef Antons Cajun Seasoning</p>
                    <p>+ 4 more...</p>
                  </figure>
                  <figure className='OrdersListItemFigure'>
                    <button>View Details</button>
                  </figure>
                </li>
              </ul>
            </section>
          </main>
        </section>
      );
}


export default OrdersPage