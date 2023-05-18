import React, { useEffect, useState } from 'react';
import Produto from '../Produto';
import "./style.css";
import { findAllProducts } from '../../services/produto-service';

const ProdutosList = () => {
  
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, [])

  const getAllProducts = async () => {
    const response = await findAllProducts();
    setProdutos(response.data);
  }

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - event.currentTarget.offsetLeft);
    setScrollLeft(event.currentTarget.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.pageX - event.currentTarget.offsetLeft;
    const walk = (x - startX) * 3;
    event.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="sabores-box cursor-pointer"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {produtos.map((produto) => (
        <Produto key={produto._id} produto={produto} />
      ))}
    </div>
  );
};

export default ProdutosList;