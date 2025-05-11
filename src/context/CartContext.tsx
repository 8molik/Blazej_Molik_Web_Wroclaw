import { createContext, useContext, ReactNode, useState } from "react";
import products from "../assets/products.json";
import { Product } from "../components/ProductCard";

type CartProviderProps = {
  children: ReactNode;
};

type CartContextType = {
  getQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartItems: CartItem[];
  cartQuantity: number;
  cartTotal: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const CartContext = createContext({} as CartContextType);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const calculatePrice = (price: { main: number; fractional: number }) =>
    price.main + price.fractional / 100;

  const getQuantity = (id: number) => {
    return cartItems.find((item) => item.product.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.product.id === id) == null) {
        const product = products.find((product) => product.id === id);
        if (!product) {
          throw new Error(`Product with id ${id} not found`);
        }
        return [...currItems, { product: { ...product }, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.product.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    setCartTotal((prevTotal) => {
      const product = products.find((product) => product.id === id);

      return product?.price
        ? Math.round((prevTotal + calculatePrice(product.price)) * 100) / 100
        : prevTotal;
    });
  };

  const decreaseItemQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.product.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.product.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.product.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    setCartTotal((prevTotal) => {
      const product = products.find((product) => product.id === id);
      return product?.price
        ? Math.round((prevTotal - calculatePrice(product.price)) * 100) / 100
        : prevTotal;
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.product.id !== id);
    });
    setCartTotal((prevTotal) => {
      const product = products.find((product) => product.id === id);
      return product
        ? Math.round(
            (prevTotal - calculatePrice(product.price) * getQuantity(id)) * 100
          ) / 100
        : prevTotal;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  const cartQuantity = cartItems.reduce((quantity, item) => {
    return quantity + item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        getQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        clearCart,
        cartItems,
        cartQuantity,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
