import React from 'react';
import "./style.css";
import trigo from "../../img/trigo.svg"
import queijo from "../../img/queijo.svg"
import { Link } from 'react-router-dom';

const Receita = ({ name, descricao, tempo, porcoes, URLreceitaUm, ReceitaSugesUmImg, ReceitaSugesUmName, URLreceitaDois, ReceitaSugesDoisImg, ReceitaSugesDoisName, URLreceitaTres, ReceitaSugesTresImg, ReceitaSugesTresName }) => {
  return (
    <>
      <div className='receitas-bg'>
        <main className='receita-bg mt-16'>
            <div className='flex container sm:px-12 p-4'>
              <div className='receita-text'>
                <h1 className='mb-6 mt-16'>{name}</h1>
                <img src={trigo} className='trigo-svg'/>
                <p className='text-zinc-700'>{descricao}</p>
                <img src={queijo} className='queijo-svg'/>
                  <div className='tempo-box text-zinc-900'>
                    <p>{tempo}</p>
                    <p>{porcoes}</p>
                  </div>
              </div>
            </div>
          </main>
      </div>

        <section>
          <div className='container sm:px-12 p-4 flex receita-box'>
            <div className='preparo-box'>
              <h2 className='uppercase massa-title'>massa</h2>
              <ul className='massa-list'>
                <h3>ingredientes</h3>
                <li>3 ¾ xícaras (chá) de farinha de trigo (cerca de 500 g)</li>
                <li>1 colher (sopa) de fermento biológico seco (10 g)</li>
                <li>1 ⅓ xícara (chá) de água morna</li>
                <li>¼ de xícara (chá) de azeite</li>
                <li>2 colheres (chá) de sal</li>
                <li>azeite para untar a tigela</li>
              </ul>
              <ol className='massa-list-preparo'>
                <h3>modo de preparo</h3>
                <li>Numa tigela grande misture o fermento com a água até dissolver. Reserve ¼ de xícara (chá) da farinha de trigo para adicionar na hora da sova. Acrescente o restante da farinha aos poucos na tigela, misturando com uma colher de pau para incorporar, até que não tenha mais farinha solta. Junte o sal e misture novamente.</li>
                <li>Adicione o azeite em duas etapas, misturando bem com as mãos ainda dentro da tigela até que a massa absorva toda a gordura – nessa etapa parece que não vai dar certo, mas a massa vai ficando mais lisa e macia conforme for absorvendo o azeite.</li>
                <li>Polvilhe a bancada com um pouco da farinha reservada e transfira a massa para a bancada. Sove por 10 minutos, adicionando a farinha reservada aos poucos – a textura é um pouco grudenta de início, se precisar, raspe a bancada com a espátula, polvilhe a farinha e continue a sovar até que a massa fique bem lisa e macia.</li>
                <li>Unte a mesma tigela (nem precisa lavar) com um pouco de azeite. Modele a massa numa bola e transfira para a tigela untada. Cubra com filme (ou pano) e deixe descansar por cerca de 1 hora e 30 minutos, ou até dobrar de volume.</li>
                <li>Unte com azeite uma assadeira grande de 34 cm X 28 cm. Transfira a massa para a assadeira e abra com as pontas dos dedos para ficar no formato retangular – cuidado para não furar a massa. Cubra com um pano e deixe fermentar por mais 1 hora, ou até a massa crescer e ficar com uma textura aerada, com algumas bolhas na superfície.</li>
                <li>Quando faltar 30 minutos para completar 1 hora, preaqueça o forno a 200 ºC (temperatura média) e prepare os ingredientes da cobertura.</li>
              </ol>
              <h2 className='uppercase massa-title'>recheio</h2>
              <ul className='massa-list'>
                <h3>ingredientes</h3>
                <li>1 cebola</li>
                <li>8 fatias de bacon</li>
                <li>½ lata de tomate pelado em cubos (com o líquido) (cerca de 1 xícara)</li>
                <li>2 colheres (sopa) de azeite</li>
                <li>sal e pimenta-do-reino moída na hora a gosto</li>
              </ul>
              <ol className='massa-list-preparo'>
                <h3>modo de preparo</h3>
                <li>Coloque o tomate pelado (com o líquido) no liquidificador e bata no modo pulsar até formar um molho pedaçudo. Tempere com sal e pimenta a gosto – cuidado com o sal, pois o bacon também é salgado.</li>
                <li>Descasque e fatie a cebola em meias-luas finas. Corte cada fatia de bacon em pedaços de 2 cm.</li>
                <li>Espalhe o molho de tomate sobre a massa e distribua as fatias de bacon e cebola por toda superfície. Regue com o azeite e leve ao forno para assar por cerca de 45 minutos, ou até dourar.</li>
                <li>Retire do forno e sirva a seguir. Essa pizza também é uma delícia servida fria.</li>
              </ol>
            </div>
            <div className='preparo-box'>
              <h2 className='uppercase mt-10 cardapio-sugestao-title'>sugestões</h2>
              <div className='flex flex-col gap-10'>
                <div>
                  <Link to={URLreceitaUm} className='flex gap-5'>
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                      <img src={ReceitaSugesUmImg} className='cardapio-sugestao-img max-w-xs transition duration-300 ease-in-out hover:scale-110'/>
                    </div>
                      <p className='mt-5 text-zinc-800'>{ReceitaSugesUmName}</p>
                  </Link>
                </div>
                <div>
                  <Link to={URLreceitaDois} className='flex gap-5'>
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                      <img src={ReceitaSugesDoisImg} className='cardapio-sugestao-img max-w-xs transition duration-300 ease-in-out hover:scale-110'/>
                    </div>
                      <p className='mt-5 text-zinc-800'>{ReceitaSugesDoisName}</p>
                  </Link>
                </div>
                <div>
                <Link to={URLreceitaTres} className='flex gap-5'>
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                      <img src={ReceitaSugesTresImg} className='cardapio-sugestao-img max-w-xs transition duration-300 ease-in-out hover:scale-110'/>
                    </div>
                      <p className='mt-5 text-zinc-800'>{ReceitaSugesTresName}</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}


export default Receita;