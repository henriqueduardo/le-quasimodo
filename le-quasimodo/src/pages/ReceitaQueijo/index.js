import React from 'react';
import Receita from '../../components/Receita';

const ReceitaQueijo = () => {
  return (
    <>
        <Receita
        name='PIZZA 4 QUEIJOS'
        descricao='A pizza fica pronta na assadeira. E o recheio é de bacon. Tudo feito em casa. Dá para ficar melhor? Dá e sobra: ela é até mais gostosa fria, no dia seguinte.'
        tempo='Tempo de preparo: 60min'
        porcoes='Rende 8 porções'
        URLreceitaUm="/receitaBacon"
        ReceitaSugesUmImg="https://minervafoods.com/wp-content/uploads/2022/12/pizza_with_bacon_pepperoni_melted_cheese_olives_mushrooms_and_cherry_tomatoes_-_blog-1.jpg"
        ReceitaSugesUmName="Pizza de Bacon"
        URLreceitaDois="/receitaPeperoni"
        ReceitaSugesDoisImg="https://d2ng48q17pwd8f.cloudfront.net/Custom/Content/Products/11/32/1132803_pizza-up-pepperoni-c-gorg-500g-36413_m2_637920098686005608.png"
        ReceitaSugesDoisName="Pizza de Peperoni"
        URLreceitaTres="/receitaCalabresa"
        ReceitaSugesTresImg="https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/subbuzz-images/unknown/6b84c148442e7674865324af99817fad.jpg"
        ReceitaSugesTresName="Pizza de Calabresa"
        />
    </>
  )
}

export default ReceitaQueijo;