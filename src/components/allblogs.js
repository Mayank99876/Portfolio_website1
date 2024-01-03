import React from 'react';
import {Consumer} from "../context";
import BlogCard from './blogs';

function allBlogs() {
  return (
   <Consumer>
    {(value) => {
        const {blogs} = value;
        return(
            <div className="container text-center my-5 py-5">
                <h1 className="font-weight-light">My<span className="text-info">Blogs</span></h1> 
                <div className="lead pb-5">Blogs are necessary to showcase your writing experience.</div>
                <div className="row my-5 pt-3">
                {blogs.map((blog) => (
                            <div key={blog.id} className="col-12 col-md-4 my-2">
                                <BlogCard blog = {blog}
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

export default allBlogs;