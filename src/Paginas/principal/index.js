import React from 'react';
import './slide';
import './style.css';
import {Link} from "react-router-dom";

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

import portifolio1 from '../.././temp/2.jpg';
import img from '../../temp/MinhaImagem.png';


function App() {
  function mostrarData(){
    let date = new Date();
    let ano = date.getUTCFullYear();
    let mes = date.getMonth();
    let meses = "";
    let dia = date.getDate();
    
    if(mes === 3){
       meses = "Mar"
    }else if(mes === 4){
       meses = "Abr"
    }
    
    return dia + " de " + meses + " " + ano + " Belo Horizonte";

  }
  return (
    <main>
      <header>
        <nav>
          <div className="slider" >
            <img className="minhaImagem" src={img} alt='Foto de Fundo' />
          </div>
          <h3 className="nome">Felipe Chamone   </h3>
          <ul>

            <li className="list1">
              <Link className="list" to="/curriculo" >Curriculo</Link>
            </li>
            <li className="list1">
              <Link className="list" to="/Encotre-me">Enconte-me</Link>
            </li>
            <div className="dropdown ">
              <li className="list1">Portifolio</li>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <a href="https://frontbox.herokuapp.com/">ChamoneBox</a>
                  </li>
                  <li>
                    <a href="https://cadastrodev.herokuapp.com/">Cadastro Dev</a>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </nav>
      </header>
      <section>
        <div className="container">
          <div className="minhasInformacoes">
            <h5>Algumas informações</h5>


            <p className="">Meu nome é Felipe Chamone, tenho 28 anos Estudo na faculdade Pitágoras,
             sou apaixonado com tecnologia e amo desenvolvimento, tenho como foco entrar como 
             desenvolvedor Web no mercado de trabalho. Tenho experiência com desenvolvimento em 
             front end </p>


          </div>

          <div className="portifolio" data-js="sslide">

            <img className="portifolioImg" data-js="sslide" src={portifolio1} alt="portifolio" />

          </div>

        </div>
      </section>
 
      <footer>
        <div className="footer">
          { mostrarData()  }

        </div>
      </footer>
    </main>
  );
}

export default App;
