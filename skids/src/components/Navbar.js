import React from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="row w-75">
                    <div className="col">
                        <Link to="/" className="navbar-brand">Skids</Link>
                    </div>
                    <div className="col">
                        <div className="navbar-nav ">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/services" className="nav-link">Services</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;