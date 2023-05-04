import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [existingValue, setExistingValue] = useState([]);
   const [items, setItems] = useState([]);

   useEffect(() => {
     // Get existing value from local storage
     const valueFromLocalStorage = JSON.parse(localStorage.getItem("item")) || [];
     setExistingValue(valueFromLocalStorage);
   }, []);
   
   useEffect(() => {
    setItems(existingValue);
  }, [existingValue]);

  const addToCart = (id, name, price, image) => {
    const quantity = 1;
    const existingItemIndex = items.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      // Item already exists, update quantity
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += quantity;
      setItems(updatedItems);
    } else {
      // Item does not exist, add to cart
      const item = { id, name, price, image, quantity };
      setItems((prevState) => [...prevState, item]);
    }

    // Update value with new items array
    const updatedValue = JSON.stringify([...existingValue, ...items]);

    // Set updated value back to local storage
    localStorage.setItem("item", updatedValue);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
