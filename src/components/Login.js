import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({email: "", password: ""})
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success){
            //redirect
            localStorage.setItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMGJlMDQxZjVkNzMzODFiYzNjNWQwIn0sImlhdCI6MTcwOTI3NjM4Mn0.VpGOIaWmmaIzKgGUuQSuTLPXAeVO7I-3TcifEZWgzVo", json.authtoken);
            props.showAlert("Logged in successfully.", "success");
            history("/");
        }
        else{
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    return (
        <div>
        <h2>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-3 my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" name='email' aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} id="password" name='password' onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login