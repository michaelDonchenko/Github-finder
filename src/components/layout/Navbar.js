import React from 'react'
import '../../css/components/Navbar.css'
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <div>
      <ul className="nav nav-tabs bg-primary navBar">
          <i className="fab fa-github fa-3x ml-4 pt-3 mr-4"></i>
          <li className="nav-item">
            <h3 className="mt-4 mr-4">Github Finder</h3> 
          </li> 
          <li className="nav-item">
             <Link className="nav-link" to="/"> Home</Link>
          </li> 
          <li className="nav-item">
             <Link className="nav-link" to="/about"> About</Link>
          </li> 
      </ul> 
    </div>
  )
}


export default  Navbar