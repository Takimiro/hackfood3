import './App.css';
import { Button, Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import api from './api'
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
    console.log(products);
  });

  function getProducts(){
    api.get(`/products`).then(response => {
      setProducts(response.data)
    })
  }


  return (
    <body>
        <Layout className="layout">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <Menu className="header-style" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <div id="menu-content">
            <span id="logoname" className="unselectable">
              <img src="/IFood_logo.png" alt="logo"/>
            </span>
            
            <div id="menu-options">
              <Button>PRODUCTS</Button>
              <Button>NON-RESTRICTIVE</Button>
            </div>
          </div>
          
        </Menu>
        <div id="products">
          {products.map((product) => {
              return <div key={product.id} id="product">
                <div>{product.name}</div>
                <div>{product.description}</div>
                <div>{product.price}R$</div>
              </div>
            })}
        </div>
        
        <canvas id="background"></canvas>
      </Layout>
    </body>

  )
}

export default App;
