import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { sendCart, addOrder } from '../../services/order-services';

const Carrinho = () => {

  const navigate = useNavigate();
  const [productsCart, setProductsCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [address, setAddress] = useState({
    rua: '',
    numero: '',
    complemento: '',
    cep: ''
  })

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem('productCart'));
    setProductsCart(storageCart);
    const total = storageCart.reduce((valor, product) => {
      return valor + product.precoUnidade;
    }, 0)
    setTotalValue(total);
  }, [])

  const remove = (id) => {
    const storageCart = JSON.parse(localStorage.getItem('productCart'));
    const filterCart = storageCart.filter((product) => product._id !== id);
    localStorage.setItem('productCart', JSON.stringify(filterCart));
    setProductsCart(filterCart);
  }

  const findAddress = async () => {
    const response = await axios.get(`https://viacep.com.br/ws/${address.cep}/json`)
    setAddress({
      ...address,
      rua: `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade}`
    })
  }

  const sendOrder = async () => {
    const productsOrder = productsCart.map((product) => {
      return {
        _id: product._id,
        quantidade: product.quantity
      }
    })

    const cartInfo = {
      produtos: productsOrder,
      precoTotal: totalValue,
      frete: 7,
      entrega: ""
    }

    const response = await sendCart(cartInfo);
    if(response.data) {
      const order = {
        produtos: response.data.produtos,
        precoTotal: response.data.precoTotal,
        entrega: response.data.entrega,
        frete: response.data.frete,
        concluido: true
      }

      const responseOrder = await addOrder(order)
      if(responseOrder.data) {
        localStorage.removeItem('productCart');
        navigate('/pedido-completo')
      }
    }
  }

  const handleChangeValues = (evento) => {
    setAddress({
      ...address,
      [evento.target.name]: evento.target.value
    })
  }

  return (
    <>
    <main  className="produto-info-bg">
      <div className="max-w-screen-xl py-20 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          
          <div className="col-span-1">
            <div className="flex flex-col mt-20">
              <h2 className="text-2xl  pb-4 carrinho-title">
                Adicione seu endereco
              </h2>
              <form className="my-4">
                <div className="flex flex-col space-y-3">

                  <input type="text" name="cep" placeholder='CEP:' id="cep"
                    value={address.cep} 
                    onChange={handleChangeValues}
                    className="w-full px-4 py-3 rounded-lg ring-yellow-300 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
                  />

                  <input type="text" name="rua" placeholder='Rua:' id="rua" 
                    value={address.rua}
                    onFocus={findAddress}
                    onChange={handleChangeValues}
                    className="w-full px-4 py-3 rounded-lg ring-yellow-300 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
                  />

                  <input type="text" name="numero" placeholder='Numéro' id="numero"
                    value={address.numero}
                    onChange={handleChangeValues} 
                    className="w-full px-4 py-3 rounded-lg ring-yellow-300 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
                  />

                  <input type="text" name="complemento" placeholder='Complemento' id="complemento" 
                    value={address.complemento}
                    onChange={handleChangeValues} 
                    className="w-full px-4 py-3 rounded-lg ring-yellow-300 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300"
                  />

                </div>
              </form>
            </div>
          </div>
          <div className='col-span-1'>
            <div className="glass p-6 box-border rounded-lg">
              <div className=" flex flex-col space-y-3">
                {productsCart.map((product) => (
                  <div key={product._id} className=" rounded-lg p-4 flex space-x-3">
                    <div className="flex">
                      <img className="w-24 object-contain" src={product.imagem} alt={product.nome}/>
                    </div>
                    <div className="flex flex-col space-y-3 flex-grow">
                      <h5 className="text-base  text-gray-700">{product.nome}</h5>
                      <h3 className="font-semibold text-lg text-primary ">R${product.precoUnidade}</h3>
                    </div>
                    <div className="flex items-center px-4 py-2 space-x-3">
                      <span className='text-lg text-gray-500 select-none'>
                        {product.quantity}un
                      </span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <MdDelete onClick={() => remove(product._id)} className="w-6 h-6 text-red-600 cursor-pointer"/>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col space-y-3 my-4">
                <div className="flex items-center">
                  <span className="flex-grow  text-gray-700">
                    Total
                  </span>
                  <span className=" font-semibold text-black">
                    R${totalValue}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="flex-grow  text-gray-700">
                    Taxa de entrega
                  </span>
                  <span className=" font-semibold text-black">
                    5
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="flex-grow  text-gray-700 text-xl">
                    Total + taxa:
                  </span>
                  <span className=" font-semibold text-black text-xl">
                    R${totalValue + 7}
                  </span>
                </div>
                <div className="flex flex-col space-y-4 mb-3">
                  <p className=" text-gray-700">Endereço de entrega</p>
                  <span className="font-semibold text-black">
                    {address.rua}
                  </span>
                  <span className="font-semibold text-black">
                    Número: {address.numero} - Complemento: {address.complemento}
                  </span>
                </div>
                <div>
                <button onClick={sendOrder} className="w-full px-6 py-3 rounded-lg bg-primary text-white  ring-red-300 focus:ring-4 transition duration-500">
                  Realizar pedido
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Carrinho;