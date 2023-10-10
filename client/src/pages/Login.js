import Header from "../components/Header";
import { Routes, Route, Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <p>This is Login page</p>
            <Link to="/register">SignUp</Link>
            {/* <form onSubmit={MakeNewUser}>
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
            </form> */}
        </div>
    )
}


export default Login;