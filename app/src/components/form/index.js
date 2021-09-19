import React, { Component } from 'react'

import validate from '../validate';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message:'',
            errors: []
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
        console.log(`${this.state.name}, ${this.state.email}, ${this.state.message}`)

        this.setState({
            errors: validate(e)
        })
    }


    render() {

    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div>
                <label>Message</label>
                <textarea value={this.state.message} onChange={this.handleMessageChange} />
            </div>
            <button type="submit" >Send Message</button>

            
        </form>
    )
    }
}

export default Form
