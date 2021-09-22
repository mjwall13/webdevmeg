import React, { Component } from 'react';
import styles from '../../brand.module.css';

import photo from '../about/photoOfMeg.jpg';

class About extends Component {

    render() {

        return(
            <div>
            <img src={photo} alt="photo of Megan" />
            </div>            
        )
    }
}

export default About;