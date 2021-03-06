import React from 'react';
import './style.css';
import img from '../../temp/MinhaImagem.png';
import { Link } from 'react-router-dom';


function Curriculo() {
    return (
        <div>
            <div className="informacoesPessoais">
                <div className="informacoes">
                    {/* <img className="minhaImg" src={img} alt="Minha imagem" /> */}
                    {/* <img src="https://source.unsplash.com/random/100x100" /> */}
                    <br />
                    <p className="titleContato">Contato</p>
                    <br />
                    <p>(31) 9.9578-4713 <i>(Whatsapp)</i><br />Chamone8@gmail.com<br /><br />
                        <a href="https://www.linkedin.com/in/felipe-chamone-320aa917b/">
                            https://www.linkedin.com/in/felipe-chamone-320aa917b/
                            </a>
                    </p>


                </div>

                <div className="formacaoAcademica">
                    <b>Formação acadêmica</b>
                    <ul>
                        <li className="nomeInstituicao">COTEMIG - Colégio e Faculdade</li>
                        <p>
                            <i>TECNICO, Tecnologia da Informação · (2016 - 2017)</i>
                        </p>
                        <li className="nomeInstituicao">Faculdade Pitagoras</li>
                        <p>
                            <i>Sistema de informação, Sistema de informação · (2018 - 2021)</i>
                        </p>

                    </ul>






                </div>

                <div className="conhecimentos">
                    <h4>Principais conhecimentos</h4>
                    <p className="con1">Javascrip<br/>Css<br/>  Asp .Net Core <br/>Desenvilvimento de API</p>
                    <p className="con2">React.Js <br/> Node.js <br/>  SQL Server<br/>  <a href="https://www.linkedin.com/in/felipe-chamone-320aa917b/">Entre outras...</a>  </p>
                </div>

            </div>


            <div className="profissional">
                <h2>Felipe Chamone Braga</h2>
                <p>Desenvolvedor</p>
                <p className="estado">Belo Horizonte, Minas Gerais, Brasil</p>
                <p className="experiencia">Experiência</p>
                <p className="tituloEmpresa">Osas Tecnologia</p>
                <p className="dadosEmpresa">
                    Estagiário de desenvolvimento web<br />
                    agosto de 2019 <br />
                    Belo Horizonte e Região, Brasil<br />
                    Suporte ao cliente, implantação do sistema e gerenciamento de banco de<br />
                    dados, desenvolvimento em .NET, Jquery criando formulário e gerando<br />
                    relatórios.<br />

                    <div className="Empresa2">

                        <p className="tituloEmpresa">BHSOFT Tecnologia</p>
                        <p className="dadosEmpresa">
                            Suporte Técnico
                        <br />
                        fevereiro de 2019 - julho de 2019 (6 meses)
                        <br />
                    Belo Horizonte e Região, Brasil<br />
                    Suporte ao cliente, criação de relatorios complexos com queries avançadas<br />
                    gerenciamento de banco de dados, Mysql<br />
                        </p>
                    </div>

                    <div className="Empresa2">

                        <p className="tituloEmpresa">ABTLOG TRANSPORTES</p>
                        <p className="dadosEmpresa">
                            Auxiliar administrativo<br />
                        janeiro de 2017 - janeiro de 2019 (2 anos 1 mês)
                        <br />
                            Belo Horizonte e Região, Brasil<br />
                            Atendimento, controle de contas a pagar, acompanhamento da logística<br />
                            da empresa, manter arquivos e cadastros de informações atualizados,<br />
                            assessorar com questões práticas da rotina de trabalho, como preparar<br />
                            documentos, prestar informações ao público, responder e-mails.<br />

                        </p>
                    </div>

                </p>
            </div>
            <Link className="voltar" to="/">Voltar</Link>
        </div>
    );
}

export default Curriculo;