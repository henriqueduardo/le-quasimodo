import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import findAllCategories from '../../services/categoryService';
import "./style.css";
import { findProductById, updateProductById } from '../../services/produto-service';

const EditProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [productForm, setProductForm] = useState({
        pizzaSabor: "",
        descricao: "",
        tamanho: "",
        precoUnidade: 55,
        imagem: "",
        refrigerante: "",
        bordaRecheada: "",
    });

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        getCategories();
        getProductById();
    }, [])

    const getProductById = async () => {
        const response = await findProductById(id);
        setProductForm(response.data)
    }

    const getCategories = async () => {
        const response = await findAllCategories();
        const categoriesSelect = response.data.map((categoria) => {
            return {
                value: categoria._id,
                label: categoria.nome
            }
        })
        setCategories(categoriesSelect);
    }

    const handleChangeValues = (evento) => {
        setProductForm({
          ...productForm,
          [evento.target.name]: evento.target.value
        })
        console.log(productForm);
      };

    const handleSubmit = async (evento) => {
      evento.preventDefault();
      const response = await updateProductById(id, productForm);

      if(response) {
        alert("produto atualizado com sucesso.")
        navigate('/admin')
      }
    }

  return (
    <>
        <div className='edit-bg'>
      <main className='relative container top-4'>
      <section className="text-gray-100">
        <div className="sm:px-12 p-4 mt-16 flex-wrap items-center">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className ="text-3xl text-black login-text mb-5">Editar produto</h1>
      </div>

          <div className="lg:w-2/6 md:w-1/2 bg-zinc-900 bg-opacity-90 rounded-lg p-8  md:ml-0 w-full mt-10 md:mt-0">
            <h2 className ="text-white text-lg font-medium title-font mb-5">Informações do produto</h2>

            <form onSubmit={handleSubmit}>

            <div>
                    <label htmlFor='pizzaSabor' className='text-zinc-100'>Sabor da pizza</label>
                    <input type='text' id='pizzaSabor' name='pizzaSabor' value={productForm.pizzaSabor} required className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>

                    <label htmlFor='descricao' className='text-zinc-100'>Descrição</label>
                    <textarea name='descricao' id='descricao' cols='30' rows='5' value={productForm.descricao} className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" required onChange={handleChangeValues}></textarea>

                    <label htmlFor='tamanho' className='text-zinc-100'>Tamanho</label>
                    <input type='text' id='tamanho' name='tamanho' required value={productForm.tamanho} className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor='preco' className='text-zinc-100'>Preço</label>
                    <input type='text' id='preco' name='precoUnidade' required value={productForm.precoUnidade} className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>

                    <label htmlFor='imagem' className='text-zinc-100'>Imagem</label>
                    <input type='text' id='imagem' name='imagem' required value={productForm.imagem} className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>

                    <label htmlFor='refrigerante' className='text-zinc-100'>Refrigerante</label>
                    <input type='text' id='refrigerante' name='refrigerante' required value={productForm.refrigerante} className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>

                    <label htmlFor='bordaRecheada' className='text-zinc-100'>Borda Recheada</label>
                    <input type='text' id='bordaRecheada' name='bordaRecheada' value={productForm.bordaRecheada} required className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>

                    <label htmlFor='categoria' className='text-zinc-100'>Categoria</label>

                    <MultiSelect
                    options={categories}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"/>

                    <div className='mt-8'>
                        <button type='submit' className='p-2 bg-primary rounded w-full'>Editar</button>
                    </div>
                </div>
            
            </form>
            
          </div>

          
      </div>
      </section>
      </main>
      </div>
    </>
  )
}

export default EditProduct;