import React, { createContext, useState, useMemo, useEffect } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) =>
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

  const removeFromCart = (itemId) =>
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

  const getTotalCartAmount = () =>
    Object.entries(cartItems).reduce((sum, [id, qty]) => {
      if (!qty) return sum;
      const item = all_product.find((p) => p.id === Number(id));
      return sum + item.new_price * qty;
    }, 0);

  const getTotalCartItems = () =>
    Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  // Optional: watch state changes
  // useEffect(() => console.log(cartItems), [cartItems]);

  const contextValue = useMemo(
    () => ({
      all_product,
      cartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      getTotalCartItems,
    }),
    [cartItems]
  );

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;