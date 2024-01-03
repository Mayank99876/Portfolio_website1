import React, { Component } from "react";
import {Consumer} from "../context";
import {v4 as uuid} from "uuid";

class WriteaRecommendation extends Component {
  state = {
    name: "",
    email: "",
    company : "",
    subject : "",
    description: "",
    submitMessage: "",
    submitTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (handler,event) => {
    event.preventDefault();
    let isSuccessful = true;
    const { name } = this.state;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Thank you ${name}. I appreciate your love!`,
        submitTextColor: `text-info`,
      });
    } else {
      this.setState({
        submitMessage: `Oops! Something went wrong. Please try again later.`,
        submitTextColor: `text-danger`,
      });
    }

    const newRecommendation = {
      id: uuid(),
      name: this.state.name,
      company: this.state.company,
      excerpt: this.state.Excerpt,
      message: this.state.description,
    }

    handler("Add_Recommendation",newRecommendation);
  };
  render() {
    return(
    <Consumer>
      {(value) => {
        const { submitMessage, submitTextColor } = this.state;
        const {handler} = value;
        return (
          <div className="container my-5">
            <h1 className="font-weight-light text-center py-5">
              <span className="text-info">Thank you!</span> for your interest
            </h1>
            <div className="row justify-content-center">
              <div className="col-11 col-lg-5">
                <form onSubmit={this.onSubmit.bind(this, handler)}>
                  <div className="form-group my-3">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="subject">Subject </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="company">Company </label>
                    <input
                      type="text"
                      name="company"
                      className="form-control"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="description">
                      Tell me your recommendation: *
                    </label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="5"
                      onChange={this.onChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-danger float-end"
                    style={{ backgroundColor: "red" }}
                  >
                    Submit
                  </button>
    
                  <div className="py-5 mx-2 text-center">
                    <h5 className={submitTextColor}>{submitMessage}</h5>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
    )
    
  }
}

export default WriteaRecommendation;
