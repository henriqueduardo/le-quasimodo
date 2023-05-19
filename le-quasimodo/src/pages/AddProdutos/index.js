import React, { useEffect, useState } from 'react';
import "./style.css";
import findAllCategories from '../../services/categoryService';
import { MultiSelect } from "react-multi-select-component";
import { addProdutoApi } from '../../services/produto-service';
import { useNavigate } from "react-router-dom";

const AddProdutos = () => {

    const [productForm, setProductForm] = useState({
        pizzaSabor: "",
        descricao: "",
        tamanho: "",
        precoUnidade: 55,
        imagem: "",
        refrigerante: "",
        bordaRecheada: "",
        categorias: [{ _id: ""}],
    });

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getCategories();
    }, [])

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

      const handleSubmit = async (event) => {
        event.preventDefault();
        const categoriesId = selected.map(category => {
            return {
                _id: category.value
            }
        })
        const product = {
            ...productForm,
            categorias: categoriesId,
            precoUnidade: parseInt(productForm.precoUnidade),
        }

        const response = await addProdutoApi(product)
        if(response.data) {
            alert(`Produto ${response.data.pizzaSabor} criado.`)
            navigate('/admin')
        }

      }

  return (
    <>
    <div className='novo-produto-bg text-black'>
        <section className='container pt-28 max-w-screen-xl mx-auto px-6 sm:px-12 p-4'>

            <div className='flex flex-col space-y-2'>
                <h1 className='text-2xl'>Cadastrar um novo produto</h1>
            </div>

            <form className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='pizzaSabor' className='text-zinc-600'>Sabor da pizza</label>
                    <input type='text' id='pizzaSabor' name='pizzaSabor' required className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-zinc-700 focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>

                    <label htmlFor='descricao' className='text-zinc-600'>Descrição</label>
                    <textarea name='descricao' id='descricao' cols='20' rows='5' className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-zinc-700 focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" required onChange={handleChangeValues}></textarea>

                    <label htmlFor='tamanho' className='text-zinc-600'>Tamanho</label>
                    <input type='text' id='tamanho' name='tamanho' required className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-zinc-700 focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor='preco' className='text-zinc-600'>Preço</label>
                    <input type='text' id='preco' name='precoUnidade' required className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-zinc-700 focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>

                    <label htmlFor='imagem' className='text-zinc-600'>Imagem</label>
                    <input type='text' id='imagem' name='imagem' required className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-zinc-700 focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>

                    <label htmlFor='refrigerante' className='text-zinc-600'>Refrigerante</label>
                    <input type='text' id='refrigerante' name='refrigerante' required className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-zinc-700 focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>

                    <label htmlFor='bordaRecheada' className='text-zinc-600 mb-2'>Borda Recheada</label>
                    <input type='text' id='bordaRecheada' name='bordaRecheada' required className="w-full bg-white text-black  focus:ring-2 focus:ring-yellow-400 rounded border border-zinc-700 focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2 mb-2" onChange={handleChangeValues}/>

                    <label htmlFor='categoria' className='text-zinc-600 pb-2'>Categoria</label>

                    <MultiSelect
                    options={categories}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select" className='mt-2'/>

                    <div className='mt-8'>
                        <button className='p-2 bg-primary rounded w-full'>Adicionar</button>
                    </div>
                </div>
            </form>
        </section>
    </div>
    </>
  )
}

export default AddProdutos;