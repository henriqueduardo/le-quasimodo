import React, { useContext } from 'react';
import logo from "../../img/logo.svg";
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";
import { AuthContext } from '../../context/AuthContext';
import { SlLogout } from "react-icons/sl";
import { TfiShoppingCart } from "react-icons/tfi";

const Header = () => {

  const { userLogged, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>

    <header className='absolute top-0 header-menu'>
        <div className='container sm:px-12 p-4'>
          <div className="flex items-center justify-between bg-opacity-30">
            <nav className="flex items-center text-sm font-medium text-gray-800">
                  <div>
                      <Link to="/"><img src={logo} alt="Logo" className="w-12 logo-icon"/></Link>
                  </div>
                  <p className='font-bold text-lg text-zinc-900 ml-2 logo-text'>Le Quasimodo</p>
            </nav>
            {
              userLogged ? (
                <div className='flex gap-2 items-center'>
                  <Link to="/admin" className="bg-transparent py-2 text-white rounded-lg p-3 bg-primary">Admin</Link>
                  <TfiShoppingCart className='w-12 h-10 bg-transparent py-2 text-white cursor-pointer rounded-lg p-3 bg-primary'/>
                  <SlLogout className="bg-transparent w-12 h-10 py-2 text-white cursor-pointer rounded-lg p-3 bg-primary" onClick={logoutUser}/>
                </div>
              ) : (
            <div className='flex gap-5'>
                    <button className="rounded bg-transparent px-3 py-2 border text-white transition hover:bg-yellow-400 hover:border-yellow-400" onClick={() => navigate('/login')}>Login</button>
            </div>
              )
            }
          </div>
        </div>
    </header>
    </>
  )
}

export default Header;