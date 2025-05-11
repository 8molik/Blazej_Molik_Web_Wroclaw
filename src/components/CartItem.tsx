import React from "react";
import { Product } from "./ProductCard";

interface CartItemProps {
  item: {
    product: Product;
    quantity: number;
  };
  increaseItemQuantity?: (id: number) => void;
  decreaseItemQuantity?: (id: number) => void;
  removeFromCart?: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
}) => {
  return (
    <>
      <li>
        {item.product.name} - {item.quantity} sztuk, cena:{" "}
        {item.product.price.main}.{item.product.price.fractional} zł Suma:{" "}
        {item.product.price.main * item.quantity +
          (item.product.price.fractional * item.quantity) / 100}{" "}
        zł
      </li>
      {increaseItemQuantity && decreaseItemQuantity && removeFromCart && (
        <div>
          <button onClick={() => increaseItemQuantity(item.product.id)}>
            +
          </button>
          <button onClick={() => decreaseItemQuantity(item.product.id)}>
            -
          </button>
          <button onClick={() => removeFromCart(item.product.id)}>
            Usuń produkt
          </button>
        </div>
      )}
    </>
  );
};

export default CartItem;
