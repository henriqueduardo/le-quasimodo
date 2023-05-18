import React from 'react';
import "./style.css"
import { FaShoppingCart } from "react-icons/fa"

const Produto = ( {produto} ) => {
  return (
    <>
    <div className='card-home'>
                  <img src={produto.imagem} className='card-home-img'/>
                  <div className='card-home-text'>
                    <h2 className='card-home-title color-primary'>{produto.pizzaSabor}</h2>
                    <p className='text-zinc-600'>{produto.descricao}</p>
                    <div className='flex justify-between py-5'>
                      <span>R${produto.precoUnidade}</span>
                      <button><FaShoppingCart className='color-primary'/></button>
                    </div>
                  </div>
    </div>
    </>
  )
}

export default Produto;