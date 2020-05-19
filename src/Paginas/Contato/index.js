import React from 'react';
import manutencao from '../../temp/manutencao4.jpg';
import './styleContato.css';

function Contato() {
    return (
        <div className="container1">

            <div className="contato">
                <h2>Contato</h2>

            </div>

            <div className="subTitle">
                <h3>Entre em contato</h3>
            </div>

            <div className="corpo">
                <h5>Felipe Chamone Braga</h5>

                <a href="https://api.whatsapp.com/send?phone=5531995784713&text=Ol%C3%A1%20Felipe"><p>Entre em contato pelo Whatsapp</p></a>
                <a href="https://www.linkedin.com/in/felipe-chamone-320aa917b/"><p>Veja algumas informações do meu perfil no meu Linkdin</p></a>
                <a href="https://github.com/chamone8"><p>Veja meus peojetos no GitHub</p></a>



                <div className="rodape">
                    <p>Contato: (31) 9.9578-4713</p>
                </div>
                
            </div>
            <a className="voltar" href="https://meu-curriculo-felipe.herokuapp.com/">Voltar</a>    
        </div>



    );
}

export default Contato;