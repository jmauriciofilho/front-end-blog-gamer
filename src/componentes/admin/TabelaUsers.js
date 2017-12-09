import axios from 'axios';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class TabelaUsers extends Component {

    constructor(props){
        super(props);
        this.state = {
            users : [],
            redirect : false
        };

        this.handleBtnDelete = this.handleBtnDelete.bind(this);
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

    handleBtnDelete(id, event){
        event.preventDefault();
        let self = this;
        axios({
            method: 'DELETE',
            url: `http://localhost:4567/api/users/${id}`
        }).then(function(response){
            self.setState({redirect : true})
        }).catch (function(error){
            console.log(error)
        })
    }


    render() {
        
        const { redirect } = this.state;
        
        if (redirect) {
            return <Redirect to='/admin/users'/>;
        }


        let users = this.state.users.map(function (user, index) {
            return(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <a href={`/admin/users/${user.id}/edit`} className="btn btn-info" role="button">Editar</a>
                        <button onClick={(event) => this.handleBtnDelete(user.id, event)} className="btn btn-danger">Excluir</button>
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