import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../context";
import { v4 as uuid } from "uuid";
import axios from "axios";

class addProject extends Component {
  state = {
    imageUrl: "",
    Title: "",
    Excerpt: "",
    body: "",
    submitMessage: "",
    submitTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };

  onSubmit = async (handler, event) => {
    event.preventDefault();

    const newProject = {
      id: uuid(),
      imageUrl: this.state.imageUrl,
      title: this.state.Title,
      excerpt: this.state.Excerpt,
      body: this.state.body,
    };

    const response = await axios.post(
      "http://127.0.0.1:5000/api/project",
      newProject
    );
    const isSuccessful = response.data.isSuccessful;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Project publish successfully.`,
        submitTextColor: `text-info`,
      });
    } else {
      this.setState({
        submitMessage: "Publish successfully",
        submitTextColor: "text-info",
      });
    }

    handler("Add_Project", newProject);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            imageUrl,
            Title,
            Excerpt,
            body,
            submitMessage,
            submitTextColor,
          } = this.state;
          const { handler } = value;
          return (
            <div className="container-fluid my-5 py-5">
              <h1 className="text-center">
                Add<span className="text-info">Project</span>
              </h1>
              <div className="row mx-5">
                <div className="col-12 col-md-6">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group my-3">
                      <label htmlFor="imageUrl">Image Url: *</label>
                      <input
                        type="text"
                        name="imageUrl"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="Title">Title: *</label>
                      <input
                        type="text"
                        name="Title"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="Excerpt">Excerpt: *</label>
                      <input
                        type="text"
                        name="Excerpt"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>

                    <SimpleMDE
                      onChange={this.onBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />

                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-dark my-3">
                        Publish
                      </button>
                    </div>
                  </form>
                  <div className="py-5 mx-2 text-center">
                    <h5 className={submitTextColor}>{submitMessage}</h5>
                  </div>
                </div>
                <div className="col-12 col-md-6 markdown">
                  <div className="justify-content-center">
                    <img src={imageUrl} alt={Title} />
                    <h1 className="font-weight-light text-center my-5">
                      {Title}
                    </h1>
                    <p>{Excerpt}</p>
                    <ReactMarkdown>{body}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default addProject;
