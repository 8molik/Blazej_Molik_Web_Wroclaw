import products from '../assets/products.json';
import { Product } from '../types/Product';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
    <div className="home-page">
    <h1>Web Shop</h1>
      <div className="cart-icon">
        <Link to="/cart">
          <button className="cart-button">
            Koszyk 
          </button>
        </Link>
      </div>
      <div className="products">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => {
              console.log(`Added to cart`);
            }}
          />
        ))}
      </div>
      </div>
    );
};
export default HomePage;
