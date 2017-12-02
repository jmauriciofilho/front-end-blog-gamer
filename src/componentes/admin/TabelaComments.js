import axios from 'axios';
import React, { Component } from 'react';

class TabelaCommets extends Component {

    constructor(props){
        super(props);
        this.state = {personagens : []};
    }

    componentDidMount(){
        let self = this;
        axios.get("https://swapi.co/api/people/")
            .then(function (response) {
                self.setState({personagens: response.data.results})
            }).catch (function (error) {
                console.log(error)
            });
    }


    render() {

        let personagens = this.state.personagens.map(function (personagem, index) {
            return(
                <tr>
                    <td>{personagem.name}</td>
                    <td>{personagem.gender}</td>
                    <td>{personagem.birth_year}</td>
                </tr>
            )

        });

        return (
            <div  className="p-5">
                <div className="card">
                    <div className="card-header">
                        <h3>Personagens:</h3>
                    </div>
                    <div>
                        <blockquote className="blockquote mb-0">
                            <div>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Gênero</th>
                                        <th>Aniversário</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {personagens}
                                    </tbody>
                                </table>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabelaCommets;