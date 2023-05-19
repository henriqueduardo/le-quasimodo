import React from 'react';
import "./style.css"
import ProdutosList from '../../components/ProdutosList';
import pizza from "../../img/pizza.jpg";
import { Link } from "react-router-dom";
import pizzaReceita from "../../img/pizza-receita.svg";
import cebolaReceita from "../../img/cebola.svg";
import italia from "../../img/italia.svg";
import torre from "../../img/torre.svg";
import chef from "../../img/chef.svg";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Home = () => {
  return (
    <>
        <div className='hero-bg'>
          <main className='relative top-16 container'>
              <div className="mt-20 sm:px-12 p-4 hero-text-bg">
                  <h1 className="text-4xl text-black md:text-5xl">O melhor da culinária italiana e francesa em forma de pizza</h1>
                  <img src={chef} className='chef-effect'/>
                  <img src={torre} className='torre-effect'/>
                  <p className='text-zinc-800 mt-5'>Deliciosa pizza de massa fina, cheia de sabor e detalhes. Entregando a verdadeira paixão e sabor da culinária em seu coração e paladar.</p>
                  <span className='color-primary text-black text-lg le-quasimodo'>Le Quasimodo</span>
                  <img src={italia} className='italia-effect'/>
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
          <div className='flex container sm:px-12 p-4 justify-between flex-wrap items-center'>
            <div className='receita-text'>
              <span className='text-zinc-700 italic'>Faça você mesmo uma das nossas receitas</span>
              <h1 className='text-zinc-900 mb-6'>PIZZA SICILIANA BACON E CEBOLA</h1>
              <img src={pizzaReceita} className='pizza-svg'/>
              <img src={cebolaReceita} className='cebola-svg'/>
              <p className='text-zinc-700'>A pizza fica pronta na assadeira. E o recheio é de bacon. Tudo feito em casa. Dá para ficar melhor? Dá e sobra: ela é até mais gostosa fria, no dia seguinte.</p>
              <button className='bg-primary hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-6'><Link to="/receitaBacon">Ver receita</Link></button>
            </div>
            <div>
                <img src={pizza} className='receita-img'/>
                
                <div className='card-review-receita'>
                  <div className='flex gap-2 items-center'>
                    <img src='https://i.pinimg.com/originals/a3/6d/55/a36d55feef6cb25cfdaa80e036a97a05.jpg' className='w-12 object-contain rounded-full'/>
                    <div>
                      <p className='flex gap-1'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></p>
                      <span>Lord Quas</span>
                    </div>
                  </div>
                    <p className='text-zinc-900 mt-2'>Expêriencia única. Excelente.</p>
                </div>

                <div className='card-review-receita-2'>
                  <div className='flex gap-2 items-center'>
                    <img src='https://i1.sndcdn.com/avatars-000314475007-oz97tm-t500x500.jpg' className='w-12 object-contain rounded-full'/>
                    <div>
                      <p className='flex gap-1'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></p>
                      <span>Lord Quas</span>
                    </div>
                  </div>
                    <p className='text-zinc-900 mt-2'>Pizza impecável.</p>
                </div>

                <div className='card-review-receita-3'>
                  <div className='flex gap-2 items-center'>
                    <img src='https://artist1.cdn107.com/b33/b333aa0ebcf4111ba90193fa517397cd_xl.jpg' className='w-12 object-contain rounded-full'/>
                    <div>
                      <p className='flex gap-1'><AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                      <span>Lord Quas</span>
                    </div>
                  </div>
                    <p className='text-zinc-900 mt-2'>Entrega rápida, serviço perfeito.</p>
                </div>

            </div>
          </div>
        </aside>

        <section className='destaque-bg'>
          <div className='container sm:px-12 p-4 '>
            <h2 className='destaque-text'><span className='aspas-esquerda'></span>Uma mistura perfeita entre a tradição italiana e a sofisticação da cozinha francesa. <br/> Le Quasimodo é uma experiência gastronômica única, que nos transporta para um mundo de sabores e aromas inesquecíveis. Uma verdadeira obra de arte em forma de pizza!<span className='aspas-direita'></span></h2>
          </div>
          
        </section>

    </>
  )
}

export default Home;