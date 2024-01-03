import React, {Component } from "react";
import axios from "axios";

class Test extends Component{
    onClick = async () => {
      const response = await axios.post("");
      console.log(response);
    }
  render(){
    return(
      <div className=" container my-5 py-5">
        <button className="btn btn-dark btn-lg" onClick={this.onClick}>Click me</button>
      </div>
    )
  }
}

export default Test;