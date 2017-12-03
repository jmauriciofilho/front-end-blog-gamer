import React, { Component } from 'react';

class FormUsers extends Component {
  render() {
    return (
        <div className="p-2 w-50 m-0 m-auto">
           <form>
                <div className="form-group">
                    <label for="email_user">Nome</label>
                    <input type="text" className="form-control" id="email_user"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </div>
    );
  }
}

export default FormUsers;