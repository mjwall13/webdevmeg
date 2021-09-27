import React from 'react';
import styles from './footer.module.css'

import linkedinLogo from '../footer/linkedInlogo.png';

export default function Footer() {
    return(
        <div className={styles.footer}> 
        <p>Copyright © 2021 Megan Petty</p>
        <a href="https://www.linkedin.com/in/megan-petty-a1258715b/" >
        <img className={styles.linkedInLogo} src={linkedinLogo} alt="linkedin logo by rivda from the Noun Project" />
        </a>
        <p>Email me at webdevmeg@gmail.com</p>
        </div>
    )
}