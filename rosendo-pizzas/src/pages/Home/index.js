import React from 'react';
import "./style.css"
import ProdutosList from '../../components/ProdutosList';
import pizza from "../../img/pizza.jpg";
import { Link } from "react-router-dom";
import splash from "../../img/splash.png";

const Home = () => {
  return (
    <>
        <div className='hero-bg'>
          <main className='relative top-16 container'>
              <div className="mt-12 sm:px-12 p-4 hero-text-bg">
                  <h1 className="text-4xl text-black md:text-5xl">True italian pizza taste. Delivered at the speed of flash</h1>
                  <img src={splash} className='splash-effect'/>
                  <p className='text-zinc-600 mt-5'>Delicious thin crust pizza, flavour-packed starters and exquisite cocktails. Delivering the passion and truly italian taste right into your heart</p>
              </div>
          </main>
        </div>

        <section className='cardapio-home-bg'>
            <div className='container'>
              <h1 className='sm:px-12 p-4 '>Sabores populares</h1>
              <div className='sm:px-12 p-4'>
                <ProdutosList/>
              </div>
            </div>
        </section>

        <aside className='receita-bg'>
          <div className='flex container sm:px-12 p-4 justify-between flex-row-reverse items-center'>
            <div className='receita-text'>
              <span className='text-zinc-700 italic'>Faça você mesmo uma das nossas receitas</span>
              <h1 className='color-primary mb-6'>PIZZA SICILIANA COM BACON E CEBOLA</h1>
              <p className='text-zinc-700'>A pizza fica pronta na assadeira. E o recheio é de bacon. Tudo feito em casa. Dá para ficar melhor? Dá e sobra: ela é até mais gostosa fria, no dia seguinte.</p>
              <button className='bg-primary hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-6'><Link to="/receita">Ver receita</Link></button>
            </div>
            <img src={pizza} className='receita-img'/>
          </div>
        </aside>
    </>
  )
}

export default Home;