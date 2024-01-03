import React from "react";
import {Link} from "react-router-dom";

function Footer(){
    return(
        <footer>
        <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
            <div className="row py-5 ">
                <div className="col-12">
               <h2 className="text-light">Interested in working with me?</h2>
               <Link to="/contact">
               <button className="btn btn-outline-light btn-lg">Let's talk</button>
               </Link>
            </div>
        </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <h5 className="text-info py-3">More links</h5>
                    <Link to="/allblogs" className="text-light text-decoration-none d-block">Blogs</Link>
                    <Link to="/allprojects" className="text-light text-decoration-none d-block">Projects</Link>
                    <Link to="/" className="text-light text-decoration-none d-block">Home</Link>
                    <Link to="/contact" className="text-light  text-decoration-none d-block">Contact me</Link>
                    <Link to="/write-a-recommendation" className="text-light text-decoration-none">Write a recommendation <i className="fa-solid fa-heart text-light"></i></Link>
                </div>
                <div className="col-12 col-md-4 text-light justify-text py-3">
                    <p style={{textAlign : "justify"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quos veniam rerum odio ut quaerat, vel, reiciendis et mollitia, soluta adipisci architecto dolores. Consequatur ad quam ipsum! Asperiores, commodi deleniti, adipisci impedit fugit aspernatur eos inventore obcaecati possimus quo, maxime id doloremque. Tenetur at excepturi dignissimos iusto deserunt illum quos.</p>
                </div>
                <div className="col-12 col-md-4">
                    <h5 className="text-info py-3">More links</h5>
                    <a href="https://www.linkedin.com/in/mayank-agarwal-122852227/"><i className="fab fa-linkedin text-decoration-none text-light h1 d-block"></i></a>
                    <a href="https://github.com/Mayank99876"><i className="fab fa-github text-decoration-none text-white h1 d-block"></i></a>
                    <Link to="/contact"><i className="fas fa-envelope text-decoration-none text-white h1"></i></Link>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-12 text-secondary">
                    <p>Copyright © Mayank Agarwal 2023</p>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;