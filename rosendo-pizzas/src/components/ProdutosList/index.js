import React, { useState } from 'react'
import Produto from '../Produto';
import pizzasMock from '../../mock/pizzas-cards';

const ProdutosList = () => {

    const [produtos, setProdutos] = useState(pizzasMock);

  return (
        <div className='flex justify-between'>
          {produtos.map(produtos => (
            <Produto key={produtos._id} produto={produtos}/>
          ))}
        </div>
  )
}

export default ProdutosList;