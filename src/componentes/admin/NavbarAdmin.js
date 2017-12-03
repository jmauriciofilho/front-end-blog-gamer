import React, { Component } from 'react';

class NavbarAdmin extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand text-warning" href="/">Blog Gamer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/posts">Posts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/users">Usuários</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <a className="navbar-brand" href="#">Logout</a>
                </span>
            </div>
        </nav>
    );
  }
}

export default NavbarAdmin;