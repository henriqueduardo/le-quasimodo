import React, { useContext, useState } from 'react';
import "./style.css";
import quasimoto from "../../img/quasimoto-pizza.jpg";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

  const [inputValues, setInputValues] = useState({
    email: "",
    senha: ""
  })

  const { loginUser } = useContext(AuthContext);
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
    loginUser(inputValues);
  }

  return (
    <>
    <div className='login-bg'>
      <main className='relative container top-10'>
      <section className="text-gray-400">
        <div className="sm:px-12 p-4 mt-16 mx-auto flex flex-wrap items-center">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className ="text-3xl text-black login-text">Crie uma conta e<br/> faça seu pedido</h1>
        <p className="leading-relaxed color-primary mt-4">Conheça nossa história, receitas e muito mais.</p>
      </div>

          <div className="lg:w-2/6 md:w-1/2 bg-zinc-900 bg-opacity-90 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className ="text-white text-lg font-medium title-font mb-5">Iniciar sessão</h2>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-white">E-mail</label>
                <input type="email" name='email' className="w-full bg-gray-400 text-white bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-300 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Digite seu e-mail' onChange={handleChangeValues}/>
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-white">Senha</label>
                <input type="password" name='senha' className="w-full bg-gray-400 text-black bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-400 rounded border border-white focus:border-yellow-400 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Digite sua senha' onChange={handleChangeValues}/>
              </div>
            <button className ="text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg " type='submit'>Entrar</button>
            </form>
            

            <a className='mt-5 cursor-pointer hover:underline text-white'>Criar conta</a>
          </div>

          
      </div>
      </section>
      </main>
    </div>

<section className="text-gray-400 bg-white">
  <div className="container sm:px-12 p-4 pt-14 mx-auto flex flex-col">
    <div className=" mx-auto">
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
            <img src={quasimoto} alt='quasimoto' className='w-20 h-20 rounded-full object-contain'/>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-black text-lg">Quasimoto</h2>
            <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
            <p className="text-base text-zinc-700">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4 text-zinc-700">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Login;