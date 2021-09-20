import React, { Component } from 'react';
import styles from '../../brand.module.css';

import Form from '../../components/form';

class Contact extends Component {

    render() {

        return(
            <>
            <h1 className={styles.title}>Contact Me</h1>
            <Form />
            </>            
        )
    }
}

export default Contact;