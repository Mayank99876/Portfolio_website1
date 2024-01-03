import React from 'react'
import ProjectCard from './projectCard';
import {Consumer} from "../context";
import { Link } from 'react-router-dom';

function ProjectSection() {
    return(
  <Consumer>
    {(value) => {
        const {projects} = value;
       return (
        <div className="bg-light w-100">
        <div className="container text-center py-5">
            <h1 className="font-weight-light">My<span className="text-info">Projects</span></h1> 
            <div className="lead pb-5">I build projects, just like this website.</div>
            <div className="row my-5 pt-3">
                    {projects.slice(0,3).map((project) => (
                        <div key={project.id} className="col-12 col-md-4 my-2">
                            <ProjectCard project = {project}
                                />
                            </div>
                    ))
                    }
                </div>
            </div>
    
            <div className="my-5">
                <div className="text-end">
                    <Link className="align-middle text-decoration-none text-dark" to="/allprojects">See my projects <i className="fas fa-arrow-right "></i></Link>
                </div>
            </div>
        </div>
      )
    }}
  </Consumer>
    )
}

export default ProjectSection;
