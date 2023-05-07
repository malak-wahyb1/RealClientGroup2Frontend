import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [existingValue, setExistingValue] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const valueFromLocalStorage =
      JSON.parse(localStorage.getItem("item")) || [];
    setExistingValue(valueFromLocalStorage);
  }, []);

  useEffect(() => {
    setItems(existingValue);
  
  }, [existingValue]);
  const addToCart = (id, name, price, image) => {
    const quantity = 1;
    const existingCart = JSON.parse(localStorage.getItem("item")) || [];
    const existingItem = existingCart.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += quantity;
      const updatedCart = JSON.stringify(existingCart);
      localStorage.setItem("item", updatedCart);
      setItems(existingCart);
    } else {
      const item = { id, name, price, image, quantity };
      const newCart = [...existingCart, item];
      const updatedCart = JSON.stringify(newCart);
      localStorage.setItem("item", updatedCart);
      setItems(newCart);
    }
  };
  const updateQuantity = (id, quantity) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, quantity };
        return updatedItem;
      }
      return item;
    }).filter(item => item.quantity > 0); // filter out items with quantity 0
    
    const existingCart = JSON.parse(localStorage.getItem("item")) || [];
    const existingItemIndex = existingCart.findIndex((item) => item.id === id);
    
    if (existingItemIndex !== -1) {
      if (quantity === 0) {
        existingCart.splice(existingItemIndex, 1); // remove item from existing cart
      } else {
        existingCart[existingItemIndex] = { id, name: items[existingItemIndex].name, price: items[existingItemIndex].price, image: items[existingItemIndex].image, quantity };
      }
    }
    
    const updatedCart = JSON.stringify(existingCart);
    localStorage.setItem("item", updatedCart);
    setItems(newItems);
  };

  return (
    <CartContext.Provider value={{ items, addToCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );


}

export default CartContext;