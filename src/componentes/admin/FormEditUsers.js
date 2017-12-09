import axios from 'axios';
import React, { Component } from 'react';

class FormEditUsers extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password:''
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
  
    handleSubmit(event){
        event.preventDefault();
        axios({
            method: 'post',
            url:'http://localhost:4567/api/users',
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