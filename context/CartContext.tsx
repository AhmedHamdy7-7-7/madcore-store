"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  size?: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (
    product: Omit<CartItem, "quantity">,
    quantity?: number
  ) => void;
  increaseQuantity: (id: string, size?: string) => void;
  decreaseQuantity: (id: string, size?: string) => void;
  removeFromCart: (id: string, size?: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("madcore-cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("madcore-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (
    product: Omit<CartItem, "quantity">,
    quantity: number = 1
  ) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id &&
          item.size === product.size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [...prevCart, { ...product, quantity }];
    });
  };

  const increaseQuantity = (id: string, size?: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: string, size?: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string, size?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.size === size)
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Cart error");
  }

  return context;
}