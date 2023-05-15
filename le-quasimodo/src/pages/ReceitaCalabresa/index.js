import React from 'react';
import Receita from '../Receita';

const ReceitaCalabresa = () => {
  return (
    <>
        <Receita
        name='PIZZA DE CALABRESA'
        descricao='A pizza fica pronta na assadeira. E o recheio é de bacon. Tudo feito em casa. Dá para ficar melhor? Dá e sobra: ela é até mais gostosa fria, no dia seguinte.'
        tempo='Tempo de preparo: 80min'
        porcoes='Rende 12 porções'
        URLreceitaUm="/receitaBacon"
        ReceitaSugesUmImg="https://minervafoods.com/wp-content/uploads/2022/12/pizza_with_bacon_pepperoni_melted_cheese_olives_mushrooms_and_cherry_tomatoes_-_blog-1.jpg"
        ReceitaSugesUmName="Pizza de Bacon"
        URLreceitaDois="/receitaPeperoni"
        ReceitaSugesDoisImg="https://d2ng48q17pwd8f.cloudfront.net/Custom/Content/Products/11/32/1132803_pizza-up-pepperoni-c-gorg-500g-36413_m2_637920098686005608.png"
        ReceitaSugesDoisName="Pizza de Peperoni"
        URLreceitaTres="/receitaQueijo"
        ReceitaSugesTresImg="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-00.jpg"
        ReceitaSugesTresName="Pizza 4 Queijos"
        />
    </>
  )
}

export default ReceitaCalabresa;