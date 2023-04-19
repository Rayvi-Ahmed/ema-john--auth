import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

        if (password !== confirm) {
            setError('did not match password. Please try again !')
            return

        }
        else if (password.length < 6) {
            setError('Password must be minumum 6 charecter !')
            return
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    return (
        <div onSubmit={handleSignUp} className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input className='input' placeholder='Write email..' type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Write password..' name='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" placeholder='Confirm your password..' name='confirm' required />
                </div>

                <input type="submit" className='btn-submit' />
            </form>
            <p><small>Already have an accout ? <Link to="/login">Login</Link></small></p>

            <p className='erorr-text'><small>{error}</small></p>

        </div>
    );
};

export default SignUp;