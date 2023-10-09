import Header from "../components/header";
import { Routes, Route, Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <p>This is Sign Up page</p>
            <Link to="/Login">Login</Link>
        </>
    )
}


export default SignUp;