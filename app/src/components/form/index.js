import React, { Component } from 'react';
import styles from './form.module.css';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message:'',
            nameError: '',
            emailError: '',
            messageError: '',
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(e.target.value)
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(e.target.value)
    }

    handleMessageChange = (e) => {
        this.setState({
            message: e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            nameError: '',
            emailError: '',
            messageError: '',
        })
        if(!this.state.name ) {
            this.setState({
                nameError: "Name is Required"
            })
        }
    
        // email
        // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!this.state.email) {
            this.setState({
                emailError: "Email is Required"
            })
        } 
    
        // message
        if(!this.state.message ) {
            this.setState({
                messageError: "Message is Required"
            })
        }

        this.setState({
            name: '',
            email: '',
            message: '',
        })


    }


    render() {

    return (
        <form onSubmit={this.handleSubmit} className={styles.container}>
            <div className={styles.formGroup}>
                <label className={styles.label} >Name</label>
                <input className={styles.input} type="text" value={this.state.name} onChange={this.handleNameChange}/>
            </div>
            <div>
                <span className={styles.error} >{this.state.nameError}</span>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label} >Email</label>
                <input className={styles.input} type="email" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div>
                <span className={styles.error}>{this.state.emailError}</span>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} >Message</label>
                <textarea className={styles.textArea} value={this.state.message} onChange={this.handleMessageChange} rows="5" cols="200"/>
            </div>
            <div>
                <span className={styles.error} >{this.state.messageError}</span>
            </div>
            <button type="submit" className={styles.btn} >Send Message</button>

            
        </form>
    )
    }
}

export default Form
