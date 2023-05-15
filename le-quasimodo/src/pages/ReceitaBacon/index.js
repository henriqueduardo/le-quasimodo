import React from 'react'
import Receita from '../Receita';

const ReceitaBacon = () => {

  return (
    <>
        <Receita
        name='PIZZA SICILIANA COM BACON E CEBOLA'
        descricao='A pizza fica pronta na assadeira. E o recheio é de bacon. Tudo feito em casa. Dá para ficar melhor? Dá e sobra: ela é até mais gostosa fria, no dia seguinte.'
        tempo='Tempo de preparo: 120min'
        porcoes='Rende 15 porções'
        URLreceitaUm="/receitaPeperoni"
        ReceitaSugesUmImg="https://d2ng48q17pwd8f.cloudfront.net/Custom/Content/Products/11/32/1132803_pizza-up-pepperoni-c-gorg-500g-36413_m2_637920098686005608.png"
        ReceitaSugesUmName="Pizza de Peperoni"
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

export default ReceitaBacon;