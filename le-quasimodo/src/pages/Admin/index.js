import React, { useEffect, useState } from 'react';
import "./style.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { findAllProducts } from '../../services/produto-service';

const Admin = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        const response = await findAllProducts();
        setProducts(response.data);
    }


  return (
    <>
    <div className='admin-bg'>
          <main className='container my-12 max-w-screen-xl mx-auto px-6'>
              <div className="mt-28 flex justify-end space-y-2">
                  <button className='p-2 bg-primary rounded' onClick={() => navigate('/admin/novo-produto')}>Novo produto</button>
              </div>
              <div className='flex flex-col my-8'> 
                <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                        <div className='overflow-hidden sm:roudend-lg shadow-md'>
                            <table className='min-w-full'>
                                <thead className='bg-primary'>
                                    <tr>
                                        <th scope='col' className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>
                                            imagem
                                        </th>
                                        <th scope='col' className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>
                                            nome
                                        </th>
                                        <th scope='col' className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>
                                            preço
                                        </th>
                                        <th scope='col' className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>
                                            tamanho
                                        </th>
                                        <th scope='col' className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>
                                            refrigerante
                                        </th>
                                        <th scope='col' className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>
                                            borda recheada
                                        </th>
                                        <th scope='col' className='relative px-6 py-3'>
                                            <span className='text-xs font-medium text-black px-6 py-3 text-left uppercase tracking-wider'>Ações</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {products.map(product => (
                                <tr key={product._id} className='bg-white border-b'>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            <img src={product.imagem} alt={product.pizzaSabor} className='w-32 object-cover'/>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            {product.pizzaSabor}
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                        {product.precoUnidade}
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                        {product.tamanho}
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                        {product.refrigerante}
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                        {product.bordaRecheada}
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center'>
                                            <div className='flex items-center justify-center space-x-3'>
                                                <Link to={`/admin/editar-produto/${product._id}`}>
                                                <FaEdit className='cursor-pointer text-2xl text-zinc-600'/>
                                                </Link>
                                                <MdDelete className='cursor-pointer text-2xl text-red-600'/>
                                            </div>
                                        </td>
                                </tr>
                                ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
              </div>
          </main>
        </div>
    </>
  )
}

export default Admin;