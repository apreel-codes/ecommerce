import Header from "../components/header";
import { Routes, Route, Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <p>This is Login page</p>
            <Link to="/SignUp">SignUp</Link>
        </>
    )
}


export default Login;