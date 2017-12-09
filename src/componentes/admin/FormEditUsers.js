import axios from 'axios';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class FormEditUsers extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            password:'',
            redirect : false
          };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value})
    }
    
    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value})
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        let self = this;
        axios.get(`http://localhost:4567/api/users/${params.id}`)
        .then(function (response) {
            console.log(response.data[0])
            self.setState({
                id : response.data[0].id,
                name : response.data[0].name,
                email : response.data[0].email,
                password : response.data[0].password
            })
        }).catch (function (error) {
            console.log(error)
        });
    }
  
    handleSubmit(event){
        event.preventDefault();
        axios({
            method: 'put',
            url:`http://localhost:4567/api/auth/users/${this.state.id}`,
            data: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
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
            return <Redirect to='/admin/users'/>;
        }

        return (
            <div className="p-2 w-50 m-0 m-auto">
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input name="name" value={this.state.name} onChange={this.handleChangeName} type="text" className="form-control" id="email_user"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" value={this.state.email} onChange={this.handleChangeEmail} type="email" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" value={this.state.password} onChange={this.handleChangePassword} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" value="Submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
  }
}

export default FormEditUsers;