import React from 'react';
import Skills from "./skills";
import {v4 as uuid} from "uuid";
import { Consumer } from '../context';

function skillSection() {
    return(
    <Consumer>
        {(value) => {
            const finalSkillRow = [];
            const {skills} = value;

            for(let i=0; i< skills.length /4; i++){
                let skillRow = skills.slice(i*4, (i + 1)*4);
                finalSkillRow.push(
                    <div key={uuid()} className="d-flex justify-content-around py-3">
                        {
                            skillRow.map((skill) => (
                                <Skills key={uuid()} skill = {skill} />
                            ))
                        }
                    </div>
                )
            };
           return (
            <div className="bg-light w-100">
            <div className="container text-center py-5">
                   <h1 className="font-weight-light"><span className="text-info">Technology</span> Stack</h1> 
                   <div className="lead pb-5">I design, develop and deliver with these weapons.</div>
                  {finalSkillRow}
                </div>
                  </div>
          )
        }}
    </Consumer>

    )
  
}

export default skillSection;