import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { login } from '../../services/AuthService';
import { setAccessToken } from '../../store/AccessTokenStore';

// We take the same Backend validations in the model and bring them to the Frontend
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const validators = { // We create an object that has a key for each form field 
    email: value => { // Each key has a function as a value that will check whether there are errors or not
        let message // Initalized as undefined

        if (!value) {
            message = 'Email is required';
        } else if (!EMAIL_PATTERN.test(value)) { // .test is a regex method that returns true or false. We want to use it when it's false so we add !. An alternative would be value.match(EMAIL_PATTERN)
            message = 'Email is invalid';
        }

        return message; // The message is returned either undefined when there are no exceptions or with the specific message when there are errors
    }, 
    password: value => { // Same as email validation
        let message;

        if (!value) {
            message = 'Password is required'
        } else if (value && value.length < 8) {
            message = 'Password must be at least 8 characters long'
        }

        return message;
    }
}

const Login = ({ doLogin }) => { // The actual component to be returned - Gets a callback for when the request is finished and we get the user from the DB
    const {push} = useHistory() // Used to redirect after login (line 67)
    
    const [state, setState] = useState({ // We create two states
        fields: { // State to manage form fields and values
            email: '',
            password: ''
        },
        errors: { // State to manage validation errors
            email: validators.email(),
            password: validators.password()
        }
    });

    const [touched, setTouched] = useState({}) // This state is use whenever the fields are available or hovered

    const isValid = () => { // This method is used to check whether the keys are valid and set the button as active
        // All the error keys of the state are checked to find if any of them return an error
        const { errors } = state;
        return !Object.keys(errors).some(error => errors[error]); // We get an array of keys using Object keys and apply .some() JS array method to know if any of them has an error // If the error is truthy then .some() will return true so we negate it (!) to indicate that the form is not valid
    }

    const onSubmit = (e) => {
        const { fields } = state
        e.preventDefault();

        if (isValid()) { // If the form isn't valid we won't be making the axios request
            console.log(fields)

            login(fields) // We use login method from /services/Authservice.js and pass state.fields as an argument
                .then(response => { // Token management from the front --> Saved into Local Storage (a place where we can save key-value pairs of information in the Browser) - It persists even when the browser is closed (Session Storage is the same but the information doesn't persist)
                    console.log('api response - accesstoken', response) // The response will be the access token
                    setAccessToken(response.access_token) // The token will be saved into the state
                    doLogin() // We want to call doLogin after the access token is retrieved. No need to pass params as it is its father's responsibility (Route props on App.js line 26)
                        .then(() => push('/'))
                })

        }
    }

    const onChange = (e) => { 
        const { name, value } = e.target // Here we need name and value that are taken from e.target
        
        // Now we want to modify the state "touched:"
        setState((prevState) => ({ // A function that returns the previous state (useful inside onChange in case we type quickly) - prevState is a placeholder
            fields: {
                ...prevState.fields, // We create a copy of the previous state (or the part we need) to avoid losing it when the new state is set
                [name]: value
            },
            erros: {
                ...prevState.errors, // We create the copy as in fields key
                [name]: validators[name] && validators[name](value) // We check if there are validators and in case there are we call it (validators[name])
            }
        }))// We return an object)
    }

    const onBlur = (e) => { // To be executed once the client is out of the focus of the input
        const {name} = e.target // Only the name is needed in this case

        setTouched((prevTouched) => ({
            ...prevTouched, // We make a copy of the previous state as previously
            [name]: true // We take the specific input using its name and turn it to true because it'll mean it's been touched
        }))
    }

    const onFocus = (e) => { // To make validations look better
        const {name} = e.target

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: false // The opposite of when it's touched
        }))
    }

    const { email, password } = state.fields // To use them in the inputs values
    const { errors } = state // We bring the errors so we can set a conditional to render the invalid feedback
       
    return (
        // COMMENTS:
        // Invalid feedback is only painted when its brother class is-invalid is true
        // The error object already provides a string
        // The button is disabled if the form isn't valid
    <div className="Login mt-4 container d-flex justify-content-center">
      <form onSubmit={onSubmit} style={{ maxWidth: 500 }}>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
            type="email" id="email" name="email" autoComplete="off"
            value={email} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
            type="password" id="password" name="password"
            value={password} onChange={onChange} onBlur={onBlur} onFocus={onFocus}
          />
          <div className="invalid-feedback">{errors.password}</div>
        </div>

        <button type="submit" className="btn btn-outline-primary" disabled={!isValid()}>
          Submit
        </button>
      </form>
    </div>
    )
}

export default MyLogin;