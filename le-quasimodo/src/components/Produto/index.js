import React from 'react';
import "./style.css"
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Product = ( {product} ) => {

  const navigate = useNavigate();

  return (
    <>
    <div className='card-home'>
                  <img src={product.imagem} className='card-home-img'/>
                  <div className='card-home-text'>
                    <h2 className='card-home-title color-primary'>{product.pizzaSabor}</h2>
                    <p className='text-zinc-600'>{product.descricao}</p>
                    <div className='flex justify-between py-5'>
                      <span>R${product.precoUnidade}</span>
                      <button onClick={() => navigate(`/product/${product._id}`)}>
                        <FaShoppingCart className='color-primary'/>
                      </button>
                    </div>
                  </div>
    </div>
    </>
  )
}

export default Product;