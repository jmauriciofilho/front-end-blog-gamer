import axios from 'axios';
import React, { Component } from 'react';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            post : [],
            comments : []
        };
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        let self = this;
        axios.get(`http://localhost:4567/api/posts/${params.id}`)
        .then(function (response) {
            self.setState({post: response.data})
            console.log(self.state.post[0].title)
        }).catch (function (error) {
            console.log(error)
        });
    }

  render() {
      
    let posts = this.state.post.map(function (post, index){
        return(
            <div key={post.id} className="col">
                <h1 className="display-3">
                    {post.title}
                </h1>
                <p className="lead">
                    {post.body}
                </p>
            </div>
        );
    })

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        {posts}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Post;