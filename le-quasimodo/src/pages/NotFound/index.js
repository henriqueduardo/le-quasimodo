import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

const NotFound = () => {
  return (
    <>
        <div className='container'>
            <div class="not-found-bg sm:px-12 p-4 flex items-center">
                <div class="container flex flex-col md:flex-row items-center justify-start px-5 text-gray-700">
                    <div class="max-w-md">
                        <div class="text-5xl font-dark font-bold">404</div>
                        <p
                        class="text-2xl md:text-3xl font-light leading-normal"
                        >Essa página não existe. </p>
                    <p class="mb-8">Não encontramos essa página.</p>
                    <Link to="/" class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-primary">Voltar ao início.</Link>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default NotFound;