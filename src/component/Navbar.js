import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
      <Link to="/" className="navbar-brand">USER</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
           <Link to="/" className="nav-link active">Login</Link>
          
        </li>
        <li className="nav-item">
            <Link to="/reg" className="nav-link">Register</Link>
        
        </li>
        <li className="nav-item">
          <Link to="/view" className="nav-link">View</Link>
        
        </li>
        <li className="nav-item">
          <Link to="/list" className="nav-link">Viewlist</Link>
        
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Navbar