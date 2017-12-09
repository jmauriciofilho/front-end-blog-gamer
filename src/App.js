import React, { Component } from 'react';
import Navbar from './componentes/Navbar';
import NavbarAdmin from './componentes/admin/NavbarAdmin';
import Home from './componentes/Home';
import Login from './componentes/admin/Login'
import TabelaUsers from './componentes/admin/TabelaUsers';
import TabelaPosts from './componentes/admin/TabelaPosts';
import TabelaComments from './componentes/admin/TabelaComments';
import FormsPosts from './componentes/admin/FormPosts';
import FormUsers from './componentes/admin/FormsUsers';
import FormEditUsers from './componentes/admin/FormEditUsers';
import Post from './componentes/Post';


import {Switch, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Navbar} />
                </Switch>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/posts/:id" component={Post}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/admin" component={TabelaUsers}/>
                        <Route exact path="/admin/users" component={TabelaUsers}/>
                        <Route exact path="/admin/users/create" component={FormUsers}/>
                        <Route exact path="/admin/posts" component={TabelaPosts}/>
                        <Route exact path="/admin/posts/create" component={FormsPosts}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
