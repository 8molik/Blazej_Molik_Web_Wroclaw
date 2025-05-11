import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useCartContext();

  const handlePlaceOrder = () => {
    const orderSummary = cartItems.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    }));
    localStorage.setItem("orderSummary", JSON.stringify(orderSummary));
    window.location.href = "/order-confirmation.html";
  };

  return (
    <div className="cart">
      <h1>Checkout</h1>
      <Link to="/cart">
        <button className="back-button">Powrót do koszyka</button>
      </Link>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total: {cartTotal}</p>
      </div>
      <button
        className="checkout-button"
        onClick={handlePlaceOrder}
        disabled={cartItems.length === 0}
      >
        Złóż zamówienie
      </button>
    </div>
  );
};

export default CheckoutPage;
