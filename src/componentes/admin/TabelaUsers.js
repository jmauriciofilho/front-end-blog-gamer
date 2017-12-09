import axios from 'axios';
import React, { Component } from 'react';

class TabelaUsers extends Component {

    constructor(props){
        super(props);
        this.state = {users : []};
    }

    componentDidMount(){
        let self = this;
        axios.get("http://localhost:4567/api/users")
        .then(function (response) {
            self.setState({users: response.data})
        }).catch (function (error) {
            console.log(error)
        });
    }


    render() {

        let users = this.state.users.map(function (user, index) {
            return(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <a href={`/admin/${user.id}/edit`} className="btn btn-info" role="button">Editar</a>
                        <a href="/admin/users/create" className="btn btn-danger" role="button">Excluir</a>
                    </td>
                </tr>
            )

        });

        return (
            <div  className="p-5">
                <a href="/admin/users/create" className="btn btn-primary" role="button">Adicionar Usuário</a>
                <br/>
                <br/>
                <div className="card">
                    <div className="card-header">
                        <h3>Usuários:</h3>
                    </div>
                    <div className="p-2">
                        <blockquote className="blockquote mb-0">
                            <div>
                                <table className="table">
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