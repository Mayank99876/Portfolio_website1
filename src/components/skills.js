import React from 'react';
import {v4 as uuid} from "uuid";

function skills(props) {
    const {name, imageUrl, starsTotal, starsActive} = props.skill;
  const starList = [];

  for(let i=0; i<starsTotal; i++){
    if(i<starsActive){
        starList.push(<i key={uuid()} className="text-info fa-solid fa-star"></i>);
    }
    else {
       starList.push(<i key={uuid()} className="fa-solid fa-star"></i>); 
    }
  }
  return (
    <div>
                <img className="rounded-circle" src={imageUrl} alt={name} style={{height: "100px", width: "100px"}} />
                <div>
                    {starList}
                </div>
            </div>
  )
}

export default  skills;