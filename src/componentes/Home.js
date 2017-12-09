import axios from 'axios';
import React, { Component } from 'react';

class Home extends Component {
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
            <div key={post.id} className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        {/* <div className="col">
                            <figure className="figure">
                                <img src={require("../media/callduty.jpg")} className="figure-img img-fluid rounded" alt="imagem da logo de star wars" />
                            </figure>
                        </div> */}
                        <div className="col">
                            <h4 className="card-title">{post.title}</h4>
                            <p className="card-text">
                                {post.body} 
                            </p>
                            <a href={`/posts/${post.id}`} className="btn btn-primary">Ver mais...</a>
                        </div>
                    </div>
                </div>
            </div>
        )

    });



    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-3">
                                Notícias do Mundo dos Vídeo Games
                            </h1>
                            <p className="lead">
                                Se você deseja está informado sobre as ultimas nividades 
                                do mundo gamer é só acompanhar nossos posts.
                                Neles você encotra as últimas informações sobre lançamentos 
                                do mercado.
                                Sobre todos os consoles: PS4, XBOX ONE, Nintendo e PC.
                            </p>
                        </div>
                        <div className="col">
                            <figure className="figure">
                                <img src={require("../media/callduty.jpg")} className="figure-img img-fluid rounded" alt="imagem da logo de star wars" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {posts}
        </div>
    );
  }
}

export default Home;