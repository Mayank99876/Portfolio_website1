import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return (
    <nav className="navbar navbar-expand-md fixed-top bg-white">
        <div className="container my-2">
         <Link to="/" className="navbar-brand text-dark fw-bold">Mayank Agarwal</Link>
         <Link to="/contact" className="ms-auto mx-3">
         <button className="btn btn-outline-info ">Contact me</button>
         </Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNav">
            <span className="fas fa-bars text-dark"></span>
         </button>
         <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
            <div className="navbar-nav">
                <Link to="/allprojects" className="nav-item nav-link text-dark text-decoration-none h6 mx-1 my-auto">Projects</Link>
                <Link to="/allblogs" className="nav-item nav-link text-dark text-decoration-none h6 mx-1 my-auto">Blogs</Link>
            </div>
         </div>
        </div>
    </nav>
    );
}

export default Navbar;