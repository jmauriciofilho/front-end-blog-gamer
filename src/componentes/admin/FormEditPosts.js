import axios from 'axios';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class FormEditUsers extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            title: '',
            body: '',
            redirect : false
          };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value})
    }
    
    handleChangeBody(event) {
        this.setState({body: event.target.value})
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        let self = this;
        axios.get(`http://localhost:4567/api/posts/${params.id}`)
        .then(function (response) {
            console.log(response.data[0])
            self.setState({
                id : response.data[0].id,
                title : response.data[0].title,
                body : response.data[0].body
            })
        }).catch (function (error) {
            console.log(error)
        });
    }
  
    handleSubmit(event){
        event.preventDefault();
        axios({
            method: 'put',
            url:`http://localhost:4567/api/auth/posts/${this.state.id}`,
            data: {
                title: this.state.title,
                body: this.state.body
            },
            headers: {
                'Access-Control-Allow-Headers': '*',
                'Content-Type': 'application/json'
            },
            json: true
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
  
    render() {

        const { redirect } = this.state;
        
        if (redirect) {
            return <Redirect to='/admin/posts'/>;
        }

        return (
            <div className="p-2 w-50 m-0 m-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Título</label>
                        <input value={this.state.title} onChange={this.handleChangeTitle} type="text" className="form-control" id="title_post"/>
                    </div>
                    <div className="form-group">
                        <label>Corpo do Post</label>
                        <input value={this.state.body} onChange={this.handleChangeBody} type="text" className="form-control" id="body_post"/>
                    </div>
                    <button type="submit" value="Submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
  }
}

export default FormEditUsers;