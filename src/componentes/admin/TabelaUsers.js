import axios from 'axios';
import React, { Component } from 'react';

class TabelaUsers extends Component {

    constructor(props){
        super(props);
        this.state = {naves : []};
    }

    componentDidMount(){
        let self = this;
        axios.get("https://swapi.co/api/starships/")
            .then(function (response) {
                self.setState({naves: response.data.results})
            }).catch (function (error) {
            console.log(error)
        });
    }


    render() {

        let naves = this.state.naves.map(function (nave, index) {
            return(
                <tr>
                    <td>{nave.name}</td>
                    <td>{nave.model}</td>
                    <td>{nave.starship_class}</td>
                </tr>
            )

        });

        return (
            <div  className="p-5">
                <div className="card">
                    <div className="card-header">
                        <h3>Naves:</h3>
                    </div>
                    <div>
                        <blockquote className="blockquote mb-0">
                            <div>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Modelo</th>
                                        <th>Classe</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {naves}
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

export default TabelaUsers;