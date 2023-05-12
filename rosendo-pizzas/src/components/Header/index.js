import React from 'react';
import logo from "../../img/rosendo.png";
import { Link } from 'react-router-dom';
import "./style.css"

const Header = () => {
  return (
    <>
    <header className='absolute top-0 header-menu'>
        <div className='container sm:px-12 p-4'>
          <div className="flex items-center justify-between bg-opacity-30">
            <nav className="flex items-center space-x-1 text-sm font-medium text-gray-800">
            <div>
                <Link to="/"><img src={logo} alt="Logo" className="w-16"/></Link>
            </div>
            </nav>
              <Link to="/login" className="rounded bg-transparent px-3 py-2 border text-white transition hover:bg-yellow-400 hover:border-yellow-400">Login</Link>
          </div>
        </div>
    </header>
    </>
  )
}

export default Header;