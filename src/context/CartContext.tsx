import { createContext, useContext, ReactNode, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};

type CartContextType = {
  getQuantity: (id: number) => number;
  addToCart: (id: number) => void;
  cartItems: CartItem[];
  cartQuantity: number;
};

type CartItem = {
  id: number;
  quantity: number;
};

const CartContext = createContext({} as CartContextType);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const addToCart = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const cartQuantity = cartItems.reduce((quantity, item) => {
    return quantity + item.quantity;
    }, 0);


  return (
    <CartContext.Provider value={{ getQuantity, addToCart, cartItems, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
