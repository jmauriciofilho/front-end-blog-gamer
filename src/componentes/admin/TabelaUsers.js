import axios from 'axios';
import React, { Component } from 'react';

class TabelaUsers extends Component {

    constructor(props){
        super(props);
        this.state = {users : []};
    }

    componentDidMount(){
        var instance = axios.create({
            baseURL: 'http://localhost:4567/api',
            headers: {
                'Content-Type': 'text/html;charset=utf-8'
            }
        });

        let self = this;
        instance.get("/users")
        .then(function (response) {
                self.setState({users: response.data.results})
            }).catch (function (error) {
            console.log(error)
        });
    }


    render() {

        let users = this.state.users.map(function (user, index) {
            return(
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button type="button" class="btn btn-info">Editar</button>
                        <button type="button" class="btn btn-danger">Excluir</button>
                    </td>
                </tr>
            )

        });

        return (
            <div  className="p-5">
                <button type="button" className="btn btn-primary">Adiconar Usuário</button>
                <br/>
                <br/>
                <div className="card">
                    <div className="card-header">
                        <h3>Usuários:</h3>
                    </div>
                    <div className="p-2">
                        <blockquote className="blockquote mb-0">
                            <div>
                                <table id="example" className="display" width="100%">
                                    <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>Ações</th>
                                    </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Email</th>
                                            <th>Ações</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {users}
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