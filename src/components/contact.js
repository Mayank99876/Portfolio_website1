import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    description: "",
    submitMessage: "",
    submitTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let isSuccessful = true;
    const { name } = this.state;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Thank you ${name}. I will contact you soon!`,
        submitTextColor: `text-info`,
      });
    } else {
      this.setState({
        submitMessage: `Oops! Something went wrong. Please try again later.`,
        submitTextColor: `text-danger`,
      });
    }
  };

  componentDidMount() {
    console.log("Component will mount");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  componentDidUpdate() {
    console.log("Component will update");
  }

  render() {
    const { submitMessage, submitTextColor } = this.state;
    return (
      <div className="container my-5">
        <h1 className="font-weight-light text-center py-5">
          <span className="text-info">Thank you!</span> for your interest
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form
              onSubmit={this.onSubmit}
              action="mailto:scientistmayankagarwal1@gmail.com"
              method="post"
              encType="text/plain"
            >
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
                <label htmlFor="description">
                  Tell me about your project *
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
                className="btn btn-dark float-end"
                style={{ backgroundColor: "black" }}
              >
                Let's talk business
              </button>

              <div className="py-5 mx-2 text-center">
                <h5 className={submitTextColor}>{submitMessage}</h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
