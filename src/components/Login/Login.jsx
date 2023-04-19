import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { rankings } from 'match-sorter';

const Login = () => {
    const { signUp } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signUp(email, password)
            .then(result => {
                const useSign = result.user
                console.log(useSign)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div onSubmit={handleSignUp} className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input className='input' placeholder='Write email..' type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Write password..' name='password' required />
                </div>

                <input type="submit" className='btn-submit' />
            </form>
            <p><small>New at Ema-jon ?<Link to="/signUp">Create a new accout</Link></small></p>


        </div>
    );
};

export default Login;