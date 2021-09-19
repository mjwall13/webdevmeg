import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Home from '../../pages/home';
// import About from '../../pages/about';
// import Contact from '../../pages/contact';

class Header extends Component{
    render (){
    return (
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>            
        <h1>Header</h1>
        </div>
    )}
}
export default Header