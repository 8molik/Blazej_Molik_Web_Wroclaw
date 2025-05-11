import { useCartContext } from "../context/CartContext";
import { Product } from "../components/ProductCard";
import products from "../assets/products.json";

const CartPage = () => {
  const { cartItems, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useCartContext();

  const getProductNameById = (id: number) => {
    const product = products.find((product: Product) => product.id === id);
    return product ? product.name : "Unknown Product";
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
            <>
          <li key={item.id}>{getProductNameById(item.id)} - {item.quantity}</li>
          <div>
            <button onClick={() => increaseItemQuantity(item.id)}>+</button>
            <button onClick={() => decreaseItemQuantity(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
            </>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
