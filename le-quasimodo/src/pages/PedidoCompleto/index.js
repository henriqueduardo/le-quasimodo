import React from 'react';
import { useNavigate } from 'react-router-dom';
import sucess from "../../img/sucess.svg"

const PedidoCompleto = () => {

    const navigate = useNavigate();

  return (
    <>
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Pedido feito!
                            </h1>
                            <p className="my-2 text-gray-800">Seu pedido foi efetuado com sucesso.</p>
                            <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-primary text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50" onClick={() => navigate("/")}>Voltar ao início.</button>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <img src={sucess} className='w-96 mt-10'/>
            </div>
        </div>
    </>
  )
}

export default PedidoCompleto;