import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/shoppingCart")
      .then((res) => setShoppingCart(res.data))
      .catch((err) => console.log(console.log(err)));
  }, []);

  const addItem = (item) => {
    console.log("adding item" , item)
    console.error("somethings wrong here")
    console.log("bye")
    axios
      .post("http://localhost:5005/shoppingCart/", item)
      .then((res) => {
        setShoppingCart(previous => [...previous, res.data])
        console.log("item has been added")
      })
      .catch((err) => console.log(err));
  };

  const removeItem = (id) => {
    axios
      .delete(`http://localhost:5005/shoppingCart/${id}`)
      .then((res) => console.log("Item has been removed from cart:", res))
      .catch((err) => console.log(err));
  };

  return (
    <CartContext.Provider
      value={{ shoppingCart, addItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
