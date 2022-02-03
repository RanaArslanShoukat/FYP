import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./images/logo.PNG";


export class Navbar extends Component {
    render() {
        return (
            <>
              <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/"><img src={logo} className="logo" alt="Book Lo" /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/Home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/User">Users</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Post">Posts</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Log out</NavLink>
                                </li>
                            </ul>
                        </div>
                     </div>
                </nav>  
            </>
        )
    }
}

export default Navbar;
