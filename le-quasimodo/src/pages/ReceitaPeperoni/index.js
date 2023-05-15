import React from 'react'
import Receita from '../Receita';

const ReceitaPeperoni = () => {

  return (
    <>
        <Receita
        name='PIZZA DE PEPERONI TRADICIONAL'
        descricao='A pizza fica pronta na assadeira. E o recheio é de bacon. Tudo feito em casa. Dá para ficar melhor? Dá e sobra: ela é até mais gostosa fria, no dia seguinte.'
        tempo='Tempo de preparo: 120min'
        porcoes='Rende 10 porções'
        URLreceitaUm="/receitaBacon"
        ReceitaSugesUmImg="https://minervafoods.com/wp-content/uploads/2022/12/pizza_with_bacon_pepperoni_melted_cheese_olives_mushrooms_and_cherry_tomatoes_-_blog-1.jpg"
        ReceitaSugesUmName="Pizza de Bacon"
        URLreceitaDois="/receitaQueijo"
        ReceitaSugesDoisImg="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-00.jpg"
        ReceitaSugesDoisName="Pizza 4 Queijos"
        URLreceitaTres="/receitaCalabresa"
        ReceitaSugesTresImg="https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/subbuzz-images/unknown/6b84c148442e7674865324af99817fad.jpg"
        ReceitaSugesTresName="Pizza de Calabresa"
        />
        
    </>
  )
}

export default ReceitaPeperoni;