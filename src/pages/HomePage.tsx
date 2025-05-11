import products from '../assets/products.json';
import { ProductCard, Product } from '../components/ProductCard';
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
          />
        ))}
      </div>
      </div>
    );
};
export default HomePage;
