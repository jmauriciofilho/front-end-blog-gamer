import React, { Component } from 'react';
import Navbar from './componentes/Navbar';
import NavbarAdmin from './componentes/admin/NavbarAdmin';
import Home from './componentes/Home';
import Login from './componentes/admin/Login'
import TabelaUsers from './componentes/admin/TabelaUsers';
import TabelaPosts from './componentes/admin/TabelaPosts';
import TabelaComments from './componentes/admin/TabelaComments';

import {Switch, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Navbar} />
                    <Route path="/admin/" component={NavbarAdmin} />
                </Switch>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/admin/users" component={TabelaUsers}/>
                        <Route path="/admin/posts" component={TabelaPosts}/>
                        <Route path="/admin/pots/id/comments" component={TabelaComments}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
