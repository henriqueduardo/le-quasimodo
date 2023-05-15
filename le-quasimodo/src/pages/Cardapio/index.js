import React from 'react';
import "./style.css";

const Cardapio = () => {
  return (
    <>
     <main className='cardapio-bg'>
        <div className='container'>
            <main className='relative top-40 container'>
                <div class="mt-12 sm:px-12 p-4 hero-text-bg">
                        <h1 class="text-4xl text-black md:text-5xl">Diversos sabores <br/> Do tradicional ao inovador</h1>
                        <p className='text-zinc-800 mt-5'>Delicious thin crust pizza, flavour-packed starters and exquisite cocktails. Delivering the passion and truly italian taste right into your heart</p>
                </div>
            </main>
        </div>
     </main>

     <aside className='offer-bg'>
        <div className='container sm:px-12 p-4'>
            <div className='offer-box'>
                <h2 className='uppercase text-center font-black offer-title'>try our special food</h2>
                <div>
                    <span>01/</span>
                    <p>the freshest dishes prepared</p>
                    <p>by an italian chef</p>
                </div>
                <h3 className='text-center uppercase font-black color-primary offer-title-2'>secret place</h3>
                <div className='text-end'>
                    <span>02/</span>
                    <p>lets discover italian cuisine</p>
                    <p>for you in a new way</p>
                </div>
            </div>
            <img src='https://live.staticflickr.com/3557/3368981831_97f1e22ef4_b.jpg' className='offer-img'/>
        </div>
     </aside>

    <section>
        <div className='container flex gap-12 sm:px-12 p-4'>
            <div>
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 card-pizza">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
            </div>

            <div>
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 card-pizza">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
            </div>

            
        </div>
    </section>
    </>
  )
}

export default Cardapio;