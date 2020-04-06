import React from 'react';
import './slide';
import './style.css';
import portifolio1 from './temp/2.jpg';
import portifolio2 from './temp/3.jpg'
import portifolio3 from './temp/4.jpg'

function App() {
  return (
    <main>
      <header>
        <nav>
        <div className="slider" >
          <img className="minhaImagem" src='https://source.unsplash.com/random/100x100' alt='Foto de Fundo' />
          </div>
          <h3 className="nome">Felipe Chamone   </h3>
          <ul>
            <li>Curriculo</li>
            <li>Enconte-me</li>
            <li>Portifolio</li>
            <ul>
              <li>
                Box
              </li>
              <li>
                Um outro
              </li>
              <li>
                Hero
              </li>
            </ul>
          </ul>
        </nav>
      </header>
      <section>
        <div className="container">
          <div className="minhasInformacoes">
            <h5>Algumas informações</h5>
            <p className="">Era spara parecer um home office Era para parecer um home officeEra para parecer um home officeEra para parecer um home officeEra para parecer um home officeEra para parecer um home officeEra para parecer um home officeEra para parecer um home officeEra para parecer um home office</p>
          </div>

          <div className="portifolio" data-js="sslide">
             
             <img className="portifolioImg" data-js="sslide" src={portifolio1} alt="portifolio"/>
             <img className="portifolioImg" data-js="sslide" src={portifolio2} alt="portifolio"/>
             <img className="portifolioImg" data-js="sslide" src={portifolio3} alt="portifolio"/>
          </div>

        </div>
      </section>
    </main>
  );
}

export default App;
