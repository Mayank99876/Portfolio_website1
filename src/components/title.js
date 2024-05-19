import React from "react";
import PropTypes from "prop-types";
import Profile from "../images/profile_linkedin_image.jpg";


function Title(props){
    // const name = "Mayank Agarwal";
    // const leadText = "I am freelancer from india";
    const {name,LeadText} = props;
    return (
        <div className="w-100 backgroundImage">
            <div className="container">
        <div className="row text-center align-items-center my-5 py-5"> 
            <div className="col-12 col-md-6">
                 <img className="rounded-circle profileImage w-75" src={Profile} alt={name}  style={{height: "450px", width: "300px"}}/>
            </div>
            <div className="col-12 col-md-6 pt-5">
                <div className="font-weight-light" style={{fontSize: "50px"}}>
                Hi, I am <span className="text-info">{name}</span>
            </div>
            <h4 className="font-weight-light">{LeadText}</h4>
            </div>
        </div>
    </div>
        </div>
        
    );
}

Title.defaultProps = {
  name : "Mayank Agarwal",
  LeadText : "I am a Full Stack Web Developer from India. I can design, develop and deploy the websites starting from skratch."
};

Title.propTypes = {
 name : PropTypes.string.isRequired,
}
export default Title;