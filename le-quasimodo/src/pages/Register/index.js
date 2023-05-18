import React, { useState } from 'react';
import "./style.css";
import { registerUser } from '../../services/authService';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [inputValues, setInputValues] = useState({
        nome: "",
        email: "",
        senha: "",
        imagem: ""
    });
    
      const navigate = useNavigate();
    
      const handleChangeValues = (evento) => {
        setInputValues({
          ...inputValues,
          [evento.target.name]: evento.target.value
        })
        console.log(inputValues);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const response =  await registerUser(inputValues);
        if(response.data) {
          alert(`usuário ${response.data.nome} criado com sucesso, faça login!`)
          navigate("/login")
        }
      }

  return (
    <>
      <div className='register-bg'>
      <main className='relative container top-4'>
      <section className="text-gray-400">
        <div className="sm:px-12 p-4 mt-16 mx-auto flex flex-wrap items-center">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className ="text-3xl text-black login-text">Crie uma conta e<br/> faça seu pedido</h1>
        <p className="leading-relaxed color-primary mt-4">Conheça nossa história, receitas e muito mais.</p>
      </div>

          <div className="lg:w-2/6 md:w-1/2 bg-zinc-900 bg-opacity-90 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className ="text-white text-lg font-medium title-font mb-5">Criar conta</h2>

            <form onSubmit={handleSubmit}>

            <div className="relative mb-4">
                <label className="leading-7 text-sm text-white">Nome</label>
                <input type="text" name='nome' className="w-full bg-gray-400 text-white bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Digite seu nome' onChange={handleChangeValues}/>
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-white">E-mail</label>
                <input type="email" name='email' className="w-full bg-gray-400 text-white bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Digite seu e-mail' onChange={handleChangeValues}/>
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-white">Senha</label>
                <input type="password" name='senha' className="w-full bg-gray-400 text-black bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-400 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Digite sua senha' onChange={handleChangeValues}/>
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-white">Imagem</label>
                <input type="text" name='imagem' className="w-full bg-gray-400 text-black bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-400 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='URL da imagem' onChange={handleChangeValues}/>
              </div>

              
            <button className ="text-white bg-primary border-0 py-2 px-8 mt-2 focus:outline-none hover:bg-yellow-500 rounded text-lg w-full" type='submit'>Criar</button>
            </form>
            
          </div>

          
      </div>
      </section>
      </main>
      </div>
    </>
  )
}

export default Register