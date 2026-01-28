import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQty = (product, qty) => {
    setCart((prev) => {
      if (qty <= 0) {
        return prev.filter((p) => p.id !== product.id);
      }

      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty } : p));
      }

      return [...prev, { ...product, qty }];
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
