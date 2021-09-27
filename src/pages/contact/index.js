import React, { Component } from 'react';
import styles from '../../brand.module.css';

import Form from '../../components/form';

import banner from '../../ContactMe.png';

class Contact extends Component {

    render() {

        return(
            <>
            <img src={banner} alt="Contact Me" className={styles.banner} />
            <Form />
            </>            
        )
    }
}

export default Contact;