"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem, UserProfile } from "@/lib/types";
import { Product, products } from "@/lib/products";

type StoreContextType = {
  cart: CartItem[];
  isCartOpen: boolean;
  user: UserProfile | null;
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setUser: (user: UserProfile | null) => void;
  logoutUser: () => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUserState] = useState<UserProfile | null>(null);

  useEffect(() => {
    const savedCart = window.localStorage.getItem("fashion-cart");
    const savedUser = window.localStorage.getItem("fashion-user");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    if (savedUser) {
      setUserState(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("fashion-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem("fashion-user", JSON.stringify(user));
    } else {
      window.localStorage.removeItem("fashion-user");
    }
  }, [user]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((current) => {
      const itemExists = current.find((item) => item.id === product.id);

      if (itemExists) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          slug: product.slug,
          price: product.price,
          image: product.images[0],
          quantity,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id: number) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);
  const toggleCart = () => setIsCartOpen((current) => !current);
  const setUser = (nextUser: UserProfile | null) => setUserState(nextUser);
  const logoutUser = () => setUserState(null);

  const value = useMemo<StoreContextType>(
    () => ({
      cart,
      isCartOpen,
      user,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      toggleCart,
      setUser,
      logoutUser,
    }),
    [cart, isCartOpen, user],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used inside a StoreProvider");
  }

  return context;
}
