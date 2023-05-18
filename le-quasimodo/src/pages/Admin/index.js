import React from 'react';
import "./style.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate();

  return (
    <>
    <div className='admin-bg'>
          <main className='container my-12 max-w-screen-xl mx-auto px-6'>
              <div className="mt-28 flex justify-end space-y-2">
                  <button className='p-2 bg-primary rounded' onClick={() => navigate('/novo-produto')}>Novo produto</button>
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
                                    
                                <tr className='bg-white border-b'>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            <img src='' alt='imagem'/>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            produto 1
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            $5
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            grande
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            sim
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            não
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center'>
                                            <div className='flex items-center justify-center space-x-3'>
                                                <FaEdit className='cursor-pointer text-2xl text-zinc-600'/>
                                                <MdDelete className='cursor-pointer text-2xl text-red-600'/>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='bg-white border-b'>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            <img src='' alt='imagem'/>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            produto 1
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            $5
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            grande
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            sim
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            não
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center'>
                                            <div className='flex items-center justify-center space-x-3'>
                                                <FaEdit className='cursor-pointer text-2xl text-zinc-600'/>
                                                <MdDelete className='cursor-pointer text-2xl text-red-600'/>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                    <tr className='bg-white border-b'>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            <img src='' alt='imagem'/>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            produto 1
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            $5
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            grande
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            sim
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                            não
                                        </td>

                                        <td className='px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center'>
                                            <div className='flex items-center justify-center space-x-3'>
                                                <FaEdit className='cursor-pointer text-2xl text-zinc-600'/>
                                                <MdDelete className='cursor-pointer text-2xl text-red-600'/>
                                            </div>
                                        </td>
                                    </tr>
                                    
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