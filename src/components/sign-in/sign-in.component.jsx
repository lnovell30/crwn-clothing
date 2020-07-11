import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-bottom.component';
import { SignInWithGoogle, signInWithGoogle } from '../../firebase/firebase.utils';


export class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            pasword: ''
        })

    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({[name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>

                <form onsubmit={this.handleSubmit}>
                    <FormInput name='email' type="email" value={this.state.email} label="email"
                    handleChange={this.handleChange}
                    />
                   
                    <FormInput name='password' type="password" value={this.state.password} label="password"
                    handleChange={this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type="submit" value="submit form" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}
export default SignIn;