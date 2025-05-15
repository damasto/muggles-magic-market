import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import api from "../Api/axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    api
      .get("/shoppingCart")
      .then((res) => setShoppingCart(res.data))
      .catch((err) => console.log(console.log(err)));
  }, []);

  const addItem = (item, quantity=1) => {
    api.get(`/shoppingCart`)
  .then(res => {
    console.log("get req:" , res.data)
    const itemFound = Array.isArray(res.data)
    ? res.data.find(cartItem => cartItem.id === item.id)
    : null;
   
    if (itemFound) {
      // Item exists, update its quantity
      const updateQuantity = {
        ...itemFound,
        quantity: itemFound.quantity + 1
      };

      // PUT request to update the item in the cart
      api.put(`shoppingCart/${itemFound.id}`, updateQuantity)
        .then(res => {
          console.log("item successfully updated", res.data);
          setShoppingCart(prev => 
            prev.map((currentProduct) =>
              currentProduct.id === itemFound.id ? res.data : currentProduct
            )
          );
        })
        .catch(err => console.log("Error updating item", err));
    } else {
      // Item doesn't exist, so create a new one
      const itemToAdd = {
        id: item.id,
        title: item.title,
        quantity: quantity,
        price: item.price,
        image: item.image
      };

      // POST request to add the item to the cart
      api.post(`/shoppingCart`, itemToAdd)
        .then(res => {
          console.log("new cart item created: ", res.data);
          setShoppingCart(prev => [...prev, res.data]); // Add new item to state
        })
        .catch(err => console.log("Error creating new item", err));
    }
  })
  .catch(err => console.log("Error while trying to add item: ", err));
  };

  const removeItem = (id) => {
    axios
      .delete(`/shoppingCart/${id}`)
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
