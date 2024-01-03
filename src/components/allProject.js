import React from 'react';
import {Consumer} from "../context";
import ProjectCard from './projectCard';

function allProject() {
  return (
   <Consumer>
    {(value) => {
        const {projects} = value;
        return(
            <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light">All<span className="text-info">Projects</span></h1> 
            <div className="lead pb-5">I build projects, just like this website.</div>
            <div className="row my-5 pt-3">
                    {projects.map((project) => (
                        <div key={project.id} className="col-12 col-md-4 my-2">
                            <ProjectCard project = {project}
                                />
                            </div>
                    ))
                    }
                </div>
            </div>
        );
    }}
   </Consumer>
  )
}

export default allProject;