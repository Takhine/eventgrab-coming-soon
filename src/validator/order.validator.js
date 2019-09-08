const Validator = require('validator'); 
const isEmpty = require('./is-empty'); 

exports.validateOrderInput = (data) => {
    let errors = {}; 

    data.email      = !isEmpty(data.email)      ? data.email      : ''; 
    data.phone      = !isEmpty(data.phone)      ? data.phone      : ''; 

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'; 
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required'; 
    }

    if(Validator.isEmpty(data.phone)){
        errors.phone = 'Phone field is required'; 
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    }
}