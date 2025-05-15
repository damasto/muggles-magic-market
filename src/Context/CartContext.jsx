import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; 
import api from "../Api/axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchCartAndProducts() {
      try {
        const [cartRes, productsRes] = await Promise.all([
          api.get("/shoppingCart"),
          api.get("/products"),
        ]);

        setProducts(productsRes.data); 


        const detailedCart = cartRes.data.map(item => {
          const product = productsRes.data.find(p => p.id === item.productId || p.id === item.id);
          return {
            ...item,
            product,
          };
        });

        setShoppingCart(detailedCart); 
      } catch (error) {
        console.error("Error fetching cart or products:", error);
      } finally {
        setLoading(false); 
      }
    }

    fetchCartAndProducts();
  }, []);

  const addItem = async (item, quantity = 1) => {
    try {
      const res = await api.get(`/shoppingCart`);
      const cartItems = res.data;
      const itemFound = cartItems.find(cartItem => cartItem.id === item.id);

      if (itemFound) {
        const updateQuantity = {
          ...itemFound,
          quantity: itemFound.quantity + quantity
        };
        const updateRes = await api.put(`/shoppingCart/${itemFound.id}`, updateQuantity);
   
        setShoppingCart(prev =>
          prev.map(ci => ci.id === itemFound.id ? {...updateRes.data, product: ci.product} : ci)
        );
      } else {
        const itemToAdd = {
          id: item.id,
          productId: item.id, 
          quantity,
          price: item.price,
          title: item.title,
          image: item.image
        };
        const createRes = await api.post(`/shoppingCart`, itemToAdd);

        setShoppingCart(prev => [...prev, {...createRes.data, product: item}]);
      }
    } catch (error) {
      console.log("Error adding item:", error);
    }
  };

 const removeItem = (id) => {
  console.log("Removing item with id:", id); 
  api
    .delete(`/shoppingCart/${id}`)
    .then((res) => {
      console.log("Item verwijderd:", res.data);
      setShoppingCart(prev => prev.filter(item => item.id !== id));
    })
    .catch((err) => {
      console.error("Fout bij verwijderen:", err);
    });
};

  return (
    <CartContext.Provider value={{ shoppingCart, addItem, removeItem, loading }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
