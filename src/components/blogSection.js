import React from 'react';
import BlogCard from "./blogs";
import { Consumer } from '../context';
import { Link } from 'react-router-dom';

function blogSection() {
    return(
    <Consumer>
        {(value) => {
            const {blogs} = value;
        return (
            <div className="bg-light w-100">
            <div className="container text-center py-5">
                <h1 className="font-weight-light">My<span className="text-info">Blogs</span></h1> 
                <div className="lead pb-5">Blogs are necessary to showcase your writing experience.</div>
                <div className="row my-5 pt-3">
                {blogs.slice(0,3).map((blog) => (
                            <div key={blog.id} className="col-12 col-md-4 my-2">
                                <BlogCard blog = {blog}
                                    />
                                </div>
                        ))
                }
                    </div>
                </div>
        
                <div className="my-5">
                    <div className="text-end">
                        <Link className="align-middle text-decoration-none text-dark" to="/allblogs">See my blogs <i className="fas fa-arrow-right "></i></Link>
                    </div>
                </div>
            </div>
          )
        }

        }
    </Consumer>
    
    )
}

export default blogSection;