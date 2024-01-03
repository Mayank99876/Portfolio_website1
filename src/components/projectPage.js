import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import axios from "axios";

// Functional component that uses useParams to access route parameters
const ParamWrapper = () => {
  const { id } = useParams();

  // You can pass the parameter to your class component here
  return <ProjectPage id={id} />;
};

class ProjectPage extends Component {
  state = {
    id: "",
    imageUrl: "",
    title: "",
    body: "",
  };

  async componentDidMount() {
    const { id } = this.props;
    const response = await axios.get(
      `http://127.0.0.1:5000/api/project?id=${id}`
    );
    const isSuccessful = response.data.isSuccessful;

    if (isSuccessful) {
      this.setState({
        imageUrl: response.data.result.imageUrl,
        title: response.data.result.title,
        body: response.data.result.body,
      });
    }
  }

  render() {
    const { imageUrl, title, body } = this.state;
    return (
      <div className="container py-5 my-5 markdown">
        <div className="justify-content-center">
          <img src={imageUrl} alt={title} className="w-100" />
        </div>
        <h1 className="font-weight-light text-center my-5">{title}</h1>
        <ReactMarkdown source={body} />
      </div>
    );
  }
}

// export default ProjectPage;
export default ParamWrapper;
