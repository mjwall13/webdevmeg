import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';

import Home from '../../pages/home';
import About from '../../pages/about';
import Contact from '../../pages/contact';

export default function Header() {
    return (
        <> 
        <h1> Header </h1>
        <nav>
        <Router>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact" >Contact</Link>

        </Router>
        </nav>
        </>
    )

}