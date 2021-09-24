import React, { Component } from 'react';
import styles from './about.module.css';

import photo from '../../photoOfMeg.jpeg';
import about from '../../About.png'

class About extends Component {

    render() {

        return(
            <div className={styles.imageContainer}> 
                <img src={about} className={styles.aboutImage} alt="About Megan" />
                <div className={styles.about}>
                    <img className={styles.photo} src={photo} alt="Megan" />
                    <p className={styles.description} >Megan started off with a History Degree with a Japanese minor from the University of Mississippi, where she also studied abroad in Tokyo, but that wasn’t enough to sate her quest for knowledge.<br />
                        Now with her second degree in Web Design and Development, she’s dedicated to doing the research and development to find answers to any problem.  Everything is a puzzle to be figured out.<br />
                        A customer service expert, Megan has the technical and personal skills needed to create the foundations to lasting success.  From full scale web applications to live streaming, she can find the best tech for you.</p>
                </div>
            </div>        
        )
    }
}

export default About;