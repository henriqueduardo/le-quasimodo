import React, { useContext } from 'react';
import logo from "../../img/logo.svg";
import { Link, useNavigate } from 'react-router-dom';
import "./style.css"
import { AuthContext } from '../../context/AuthContext';

const Header = () => {

  const { userLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(`valor do contexto`, userLogged);

  return (
    <>
    <div className='header-highlight'>
      <p className='text-center text-highlight p-2 italic container text-white'>Le Quasimodo - Culinária italiana & francesa de mãos dadas. Não perca essa oportunidade.</p>
    </div>
    <header className='absolute top-10 header-menu'>
        <div className='container sm:px-12 p-4'>
          <div className="flex items-center justify-between bg-opacity-30">
            <nav className="flex items-center text-sm font-medium text-gray-800">
                  <div>
                      <Link to="/"><img src={logo} alt="Logo" className="w-12"/></Link>
                  </div>
                  <p className='font-bold text-lg text-zinc-900 ml-2'>Le Quasimodo</p>
            </nav>
                  <div className='flex gap-5'>
                    <Link to="/cardapio" className="bg-transparent px-3 py-2 text-white">Cardapio</Link>
                    <button className="rounded bg-transparent px-3 py-2 border text-white transition hover:bg-yellow-400 hover:border-yellow-400" onClick={() => navigate('/login')}>Login</button>
                  </div>
          </div>
        </div>
    </header>
    </>
  )
}

export default Header;