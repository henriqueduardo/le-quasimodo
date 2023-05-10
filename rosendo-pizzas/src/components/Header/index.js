import React from 'react';
import logo from "../../img/rosendo.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
  <div
    class="absolute inset-0 hero-bg">
  </div>
  <div class="relative">
    <header className='container'>
      <div class="sm:px-12 p-4 flex items-center justify-between bg-opacity-30">
        <div class="flex items-center space-x-2">
            <Link to="/"><img src={logo} alt="Logo" class="w-16"/></Link>
        </div>
        <nav class="flex items-center space-x-1 text-sm font-medium text-gray-800">
          <Link to="/login" class="rounded bg-transparent px-3 py-2 border text-white transition hover:bg-yellow-400 hover:border-yellow-400">Login</Link>
        </nav>
      </div>
    </header>
  </div>
    </>
  )
}

export default Header;