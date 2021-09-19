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

    }

    handleEmailChange = (e) => {

    }

    handleMessageChange = (e) => {

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

            
        </form>
    )
    }
}

export default Form
