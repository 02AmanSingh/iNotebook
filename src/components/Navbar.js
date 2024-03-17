import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {

  let history = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMGJlMDQxZjVkNzMzODFiYzNjNWQwIn0sImlhdCI6MTcwOTI3NjM4Mn0.VpGOIaWmmaIzKgGUuQSuTLPXAeVO7I-3TcifEZWgzVo");
    history('/login');
  }

  let location = useLocation();
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          {!localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMGJlMDQxZjVkNzMzODFiYzNjNWQwIn0sImlhdCI6MTcwOTI3NjM4Mn0.VpGOIaWmmaIzKgGUuQSuTLPXAeVO7I-3TcifEZWgzVo") ? <form className="form-inline my-2 my-lg-0">
              <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign up</Link>
            </form>: <button onClick={handleLogout} className='btn btn-primary'>Logout</button> } 
        </div>
      </div>
    </nav>
  )
}

export default Navbar