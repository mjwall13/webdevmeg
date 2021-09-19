import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message:'',
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
    }


    render() {

    return (
        <form>
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
            <button type="submit" onSubmit={this.handleSubmit}>Send Message</button>

            
        </form>
    )
    }
}

export default Form
