import React from 'react';
import './styles/App.css';
import products from './assets/products.json';
import { Product } from './types/Product';


function App() {
  return (
    <div className="App">
      <h1>Web Shop</h1>
      <div className="products">
        {products.map((product: Product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>Price: {product.price.main}.{product.price.fractional}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
