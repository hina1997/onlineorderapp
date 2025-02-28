import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark  mb-4" style={{ backgroundColor: '#BB8FCE ' }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Online Clothing App
            </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">
                                    Dashboard
                        </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="register.html">
                                    Sign Up
                        </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="login.html">
                                    Login
                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav
