import React, { Component } from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';

import Home from '../../pages/home';
import About from '../../pages/about';
import Contact from '../../pages/contact';

class Header extends Component{
    render (){
    return (
        <Router>
        <div>
            <nav>
                <Link path={Home} to="/" >Home</Link>
                <Link path={About} to="/about" >About</Link>
                <Link path={Contact} to="/contact" >Contact</Link>
            </nav>
            <h1>Header</h1>
        </div>
        </Router>            
    )}
}
export default Header