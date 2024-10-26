import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams(); // Captura o ID do produto a partir da URL
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Verifica se já existe um carrinho no LocalStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const product = { id, name: "Exemple", price: 100 };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Preço: {product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductPage;
