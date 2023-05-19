import React, { useEffect, useState } from 'react';
import "./style.css";
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from '../../services/produto-service';

const ProductInfo = () => {

  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await findProductById(id);
    setProduct(response.data);
}

  const addToCart = () => {
    const productCart = [
      {
        ...product,
        quantity: quantity,
      }
   ]
   const storageCart = JSON.parse(localStorage.getItem('productCart'));
   if(storageCart) {
    productCart.push([
      ...storageCart
    ])
    localStorage.setItem('productCart', JSON.stringify(productCart));
   }
   localStorage.setItem('productCart', JSON.stringify(productCart));
  }

  return (
    <>
        <section className="text-zinc-900 pt-10 produto-info-bg">
            <div className="container sm:px-12 p-4 mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-info sm:text-4xl text-3xl mb-4 font-medium">{product.pizzaSabor}
                  <br className="hidden lg:inline-block"/>
                </h1>
                <p className="mb-8 leading-relaxed">{product.descricao}</p>
                <span className='leading-relaxed'>R$ {product.precoUnidade}</span>
                <div className="flex justify-center items-center mt-8">
                  <button className="inline-flex text-white bg-zinc-600 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-400 hover:text-black rounded text-lg" 
                  onClick={() => {
                    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
                  }}>
                    <HiOutlineMinus/>
                  </button>
                    <span className='text-lg text-black select-none px-4'>{quantity}</span>
                  <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-zinc-900 hover:text-white rounded text-lg" 
                    onClick={() => {
                      setQuantity(quantity + 1)
                  }}>
                    <HiOutlinePlus/>
                  </button>
                </div>
                  <button className='inline-flex items-center text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:text-black rounded text-lg mt-8' onClick={addToCart}>
                    <FaShoppingCart/>
                    <span className='ml-2 text-sm' onClick={() => navigate("/product/carrinho")}>Adicionar ao carrinho</span>
                  </button>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="imagem pizza" src={product.imagem}/>
              </div>
            </div>
        </section>
    </>
  )
}

export default ProductInfo;