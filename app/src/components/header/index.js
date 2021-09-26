import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.css';
import logo from '../../tagline.png'
class Header extends Component{
    render (){
    return (
        <div className={styles.headerCont} >
          <img src={logo} alt="logo" className={styles.logo} />
        <nav >
          <ul className={styles.nav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>            
        </div>
    )}
}
export default Header