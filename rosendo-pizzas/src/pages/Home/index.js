import React from 'react';
import "./style.css"
import ProdutosList from '../../components/ProdutosList';
import pizza from "../../img/pizza.jpg"

const Home = () => {
  return (
    <>
        <main className='relative container'>
            <div class="mt-12 sm:px-12 p-4 hero-text-bg">
                <h1 class="text-4xl text-black md:text-5xl">True italian pizza taste. Delivered at the speed of flash</h1>
                <p className='text-zinc-600 mt-5'>Delicious thin crust pizza, flavour-packed starters and exquisite cocktails. Delivering the passion and truly italian taste right into your heart</p>
            </div>
        </main>

        <section className='cardapio-home-bg'>
            <div className='container'>
              <h1 className='sm:px-12 p-4 pt-20'>Sabores populares</h1>
              <div className='sm:px-12 p-4'>
                <ProdutosList/>
              </div>
            </div>
        </section>

        <aside className='receita-bg'>
          <div className='flex container sm:px-12 p-4 justify-between'>
            <div className='receita-text'>
              <h1 className='color-primary'>Faça você mesmo uma das nossas receitas</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button>Ver receita</button>
            </div>
            <img src={pizza} className='receita-img'/>
          </div>
        </aside>
    </>
  )
}

export default Home;