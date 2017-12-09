import axios from 'axios';
import React, { Component } from 'react';

class TabelaPosts extends Component {

    constructor(props){
        super(props);
        this.state = {posts : []};
    }

    componentDidMount(){
        let self = this;
        axios.get("http://localhost:4567/api/posts")
            .then(function (response) {
                self.setState({posts: response.data})
            }).catch (function (error) {
                console.log(error)
            });
    }


    render() {

        let posts = this.state.posts.map(function (post, index) {
            return(
                <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>
                        <button type="button" className="btn btn-info">Comentarios</button>
                        <button type="button" className="btn btn-info">Editar</button>
                        <button type="button" className="btn btn-danger">Excluir</button>
                    </td>
                </tr>
            )

        });

        return (
            <div  className="p-5">
                <a href="/admin/posts/create" className="btn btn-primary" role="button">Criar Posts</a>
                <br/>
                <br/>
                <div className="card">
                    <div className="card-header">
                        <h3>Posts:</h3>
                    </div>
                    <div>
                        <blockquote className="blockquote mb-0">
                            <div className="p-2">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Título</th>
                                        <th>Ação</th>
                                    </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Título</th>
                                            <th>Ações</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {posts}
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

export default TabelaPosts;