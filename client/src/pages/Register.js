import React, { useState } from 'react';
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Register = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');


    const MakeNewUser = async (e) => {
        e.preventDefault();

        try{
            const user = {
                first_name,
                last_name,
                email,
                password
            };

            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)
            });
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    }

    return (
        <div>
            <p>This is Sign Up page</p>
            <Link to="/Login">Login</Link>
            <form onSubmit={MakeNewUser}>
                <label>First name</label>
                <input type="text" required name='first_name' value={first_name} onChange={e => setFirstName(e.target.value)} />

                <label>Last name</label>
                <input type="text" required name='last_name' value={last_name} onChange={e => setLastName(e.target.value)} />

                <label>Email name</label>
                <input type="email" required name='email' value={email} onChange={e => setEmail(e.target.value)} />

                <label>Password</label>
                <input value={password} required name='password' onChange={e => setPassword(e.target.value)} />

                <label>Confirm Password</label>
                <input value={confirm_password} required name='confirm_password' onChange={e => setConfirmPassword(e.target.value)} />

                <a href='/login'>Already Registered? Login</a>

                <button className='border'>Submit</button>
            </form>
        </div>
    )
}


export default Register;