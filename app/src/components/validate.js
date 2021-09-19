export default function validate(values) {
    let errors = {}

    // name
    if(!values.name.trim() ) {
        errors.name = "Name Required"
    }

    // email
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!values.email) {
        errors.email = "Email Required"
    } else if(re.test(values.email)){
        errors.email = "Email is Invalid"
    }

    // message
    if(!values.message.trim() ) {
        errors.message = "Message Required"
    }
}