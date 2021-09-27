import React, { Component } from 'react';
import styles from './portfolio.module.css';

import catGifs from './catGifs.png';
import cocktailAPI from './cocktailAPI.png';
import shopCSS from './shopCSS.png';
import banner from './Projects.png';

class Portfolio extends Component {
    render () {
        return (
            <div className={styles.projects}>
                <img src={banner} className={styles.banner} alt="Projects" />
                <ul>
                    <li className={styles.portfolioLI}>
                        <img src={catGifs} className={styles.screenshots} alt="screenshot of gifquick in action displaying cat gifs" />
                        <div className={styles.description}>
                        <h3>GifQuick</h3>
                        <p>GifQuick is a gif aggrigator that prioritizes your saved gifs over discovering new ones.<br />
                        It's a React app styled with css.  I've also developed my own database and API using Postgres.<br />
                        It requires authentication using JWT and is deployed on Heroku</p>
                        </div>
                    </li>
                    <li className={styles.portfolioLI}> 
                        <img src={cocktailAPI} className={styles.screenshots} alt="randomly generated drink" />
                        <div className={styles.description}>
                        <h3>Cocktail API</h3>
                        <p>In this React App styled with CSS, I use an api to populate drink-based searches.<br />
                        The surprise me button calls and displays a random drink, and there are differnt forms for the different types of searches: by drink, by ingredient or by glass type.</p>
                        </div>
                    </li>
                    <li className={styles.portfolioLI}>
                        <img src={shopCSS} className={styles.screenshots} alt="css file" />
                        <div className={styles.description}>
                        <h3>Bike Shop</h3>
                        <p>This is a website recreation project using only HTML and CSS.<br />
                        I was given the home page to recreate, then build cohesive supplemental pages.</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Portfolio;