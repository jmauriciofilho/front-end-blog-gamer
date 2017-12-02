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
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
            </div>
        </div>
    );
  }
}

export default Home;