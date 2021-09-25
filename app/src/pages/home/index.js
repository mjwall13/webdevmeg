import React, { Component }from 'react'
import styles from '../../brand.module.css'

import banner from '../../tagline.png';
import photo from '../../headshot.jpg';

class Home extends Component {

    render() {

        return(
            <div>
                <img src={banner} className={styles.banner} alt="Megan Petty, Web Developer, Technical Producer, Resource Manager" />
                <div className={styles.homeContent}>
                    <img src={photo} alt="Megan" className={styles.photo} />
                    <div className={styles.words} >
                    <h2>
                    A double bachelors in Web Design and Development, and History, she has managed projects including…
                    </h2>
                    <ul className={styles.list}>
                        <li>
                            Web Design and Development
                        </li>
                        <li>
                            Database and Client Records Management
                        </li>
                        <li>
                            Social Media Management and Asset Development
                        </li>
                        <li>
                            Live Stream and Virtual Event Production
                        </li>
                    </ul>
                    </div>
                </div>
                


            </div>
        )
    }
}

export default Home;