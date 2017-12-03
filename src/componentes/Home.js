import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-3">
                                Ser Gamer
                            </h1>
                            <p className="lead">
                                Star Wars é o título de uma franquia do tipo ópera espacial 
                                estadunidense criada pelo cineasta George Lucas. 
                                Que conta com uma série de oito filmes de fantasia científica e 
                                um spin-off. 
                            </p>
                        </div>
                        <div className="col">
                            <figure className="figure">
                                <img src={require("../media/star-wars.jpg")} className="figure-img img-fluid rounded" alt="imagem da logo de star wars" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <figure className="figure">
                                <img src={require("../media/callduty.jpg")} className="figure-img img-fluid rounded" alt="imagem da logo de star wars" />
                            </figure>
                        </div>
                        <div className="col">
                            <h4 className="card-title">Estratégias em um Novo Paradigma Globalizado</h4>
                            <p className="card-text">
                                    É claro que o desafiador cenário globalizado estende o alcance e a importância dos índices pretendidos. Por conseguinte, a complexidade dos estudos efetuados auxilia a preparação e a composição do orçamento setorial. Assim mesmo, o entendimento das metas propostas exige a precisão e a definição dos níveis de motivação departamental. Caros amigos, a constante divulgação das informações é uma das consequências das posturas dos órgãos dirigentes com relação às suas atribuições. 
                                    Desta maneira, a revolução dos costumes garante a contribuição de um grupo importante na determinação das novas proposições. A prática cotidiana prova que a competitividade nas transações comerciais assume importantes posições no estabelecimento dos procedimentos normalmente adotados. O que temos que ter sempre em mente é que a mobilidade dos capitais internacionais facilita a criação do retorno esperado a longo prazo. As experiências acumuladas demonstram que a necessidade de renovação processual obstaculiza a apreciação da importância das condições inegavelmente apropriadas. 
                                </p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;