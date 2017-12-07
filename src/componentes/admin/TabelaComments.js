import axios from 'axios';
import React, { Component } from 'react';

class TabelaCommets extends Component {

    constructor(props){
        super(props);
        this.state = {coments : []};
    }

    componentDidMount(){
        let self = this;
        axios.get("http://localhost:4567/api/coments")
            .then(function (response) {
                self.setState({coments: response.data})
            }).catch (function (error) {
                console.log(error)
            });
    }


    render() {

        let coments = this.state.coments.map(function (coment, index) {
            return(
                <tr key={coment.id}>
                    <td>{coment.author}</td>
                    <td>{coment.body}</td>
                    <td>
                        <button type="button" class="btn btn-info">Editar</button>
                        <button type="button" class="btn btn-danger">Excluir</button>
                    </td>
                </tr>
            )

        });

        return (
            <div  className="p-5">
                <a href="#" className="btn btn-primary" role="button">Adicionar Comentários</a>
                <div className="card">
                    <div className="card-header">
                        <h3>Comentários</h3>
                    </div>
                    <div>
                        <blockquote className="blockquote mb-0">
                            <div className="p-2">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Autor</th>
                                        <th>Comentário</th>
                                        <th>Ações</th>
                                    </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Autor</th>
                                            <th>Comentário</th>
                                            <th>Ações</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {coments}
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