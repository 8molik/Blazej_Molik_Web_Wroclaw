import { useCartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const {
    cartItems,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
    cartTotal,
  } = useCartContext();

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate('/order-confirmation', {
      state: {
        items: cartItems,
      },
    });
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <Link to="/">
        <button className="back-button">Powrót do listy</button>
      </Link>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            increaseItemQuantity={increaseItemQuantity}
            decreaseItemQuantity={decreaseItemQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <div className="cart-summary">
        {cartTotal > 0 ? <p>Całkowita cena: {cartTotal}</p> : <p>Your cart is empty</p>}
      </div>
      <Link to="/checkout">
        <button className="checkout-button" disabled={cartTotal === 0} onClick={handlePlaceOrder}>
          Złóż Zamówienie
        </button>
      </Link>
    </div>
  );
};

export default CartPage;
