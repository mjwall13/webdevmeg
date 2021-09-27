import React, { Component }from 'react'
import styles from '../../brand.module.css'

import banner from '../../About.png';
import photo from '../../headshot.jpg';

class Home extends Component {

    render() {

        return(
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zBEa_MgurPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                <img src={banner} className={styles.banner} alt="Megan Petty, Web Developer, Technical Producer, Resource Manager" />
                <div className={styles.homeContent}>
                    <img src={photo} alt="Megan" className={styles.photo} />
                    <div className={styles.words} >
                    <p className={styles.description} >Megan started off with a History Degree with a Japanese minor from the University of Mississippi, where she also studied abroad in Tokyo, but that wasn’t enough to sate her quest for knowledge.<br />
                        Now with her second degree in Web Design and Development, she’s dedicated to doing the research and development to find answers to any problem.  Everything is a puzzle to be figured out.<br />
                        A customer service expert, Megan has the technical and personal skills needed to create the foundations to lasting success.  From full scale web applications to live streaming, she can find the best tech for you.</p>
                    </div>
                </div>
                


            </div>
        )
    }
}

export default Home;