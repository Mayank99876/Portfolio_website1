import React, { Component } from "react";
import axios from "axios";
// import project1 from "./images/tindog_master.png";
import project1 from "./images/Amazon_clone.png";
import project2 from "./images/digital_marketing_website.png";
import project3 from "./images/age_and_distance_calculator.png";
import project4 from "./images/Bitcoin_Finance.png";
import project5 from "./images/Dice_Challenge.png";
import project6 from "./images/Simon website.png";
import project7 from "./images/drum kit.png";
import project8 from "./images/basic_portfolio.png";
import project9 from "./images/best_gadgets_91.png";
import project10 from "./images/mayank_agarwal_personal_site.png";
import html5 from "./images/Logo HTML5.JPG";
import css3 from "./images/css 3.jpg";
import javascript from "./images/javascript.jpg";
import bootstrap from "./images/bootstrap.png";
import reactJs from "./images/react js.jpg";
import mysql from "./images/my sql.png";
import python from "./images/python.jpg";
import flask from "./images/flask.jpg";
import blog1 from "./images/blog1.jpg";
import blog2 from "./images/blog2.jpg";
import blog3 from "./images/blog3.jpg";
import blog4 from "./images/blog4.jpg";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "Add_Project":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "Add_blog":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;

      case "Add_Recommendation":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;

      default:
        break;
    }
  };

  state = {
    handler: this.handler,
    blogs: [
      {
        id: 1,
        Title: "Blog 1",
        imageUrl: blog1,
        Excerpt: "This is my blog about...",
        body: "body 1",
      },
      {
        id: 2,
        Title: "Blog 2",
        imageUrl: blog2,
        Excerpt: "This is my blog about...",
        body: "body 2",
      },
      {
        id: 3,
        Title: "Blog 3",
        imageUrl: blog3,
        Excerpt: "This is my blog about...",
        body: "body 3",
      },
      {
        id: 4,
        Title: "Blog 4",
        imageUrl: blog4,
        Excerpt: "This is my blog about...",
        body: "body 4",
      },
    ],
    recommendations: [],
    skills: [
      {
        id: 1,
        name: "html 5",
        imageUrl: html5,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "css3",
        imageUrl: css3,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "javascript",
        imageUrl: javascript,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "bootstrap 5",
        imageUrl: bootstrap,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 5,
        name: "react",
        imageUrl: reactJs,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 6,
        name: "mysql",
        imageUrl: mysql,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 7,
        name: "python",
        imageUrl: python,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 8,
        name: "flask",
        imageUrl: flask,
        starsTotal: 3,
        starsActive: 1,
      },
    ],
    projects: [
      // {
      //   id: 1,
      //   title: "Tindog Master",
      //   imageUrl: project1,
      //   excerpt: "This is my project about dogs.",
      //   body: "body 1",
      // },
      {
        id: 1,
        title: "Amazon Clone",
        imageUrl: project1,
        excerpt: "This is my project about Clone of amazon.",
        body: "body 1",
      },
      {
        id: 2,
        title: "Digital Marketing Website",
        imageUrl: project2,
        excerpt: "This is my project of digital marketing website.",
        body: "body 2",
      },
      {
        id: 3,
        title: "Age and Distance Calculator",
        imageUrl: project3,
        excerpt: "This is my project about age and distance calculator.",
        body: "body 3",
      },
      {
        id: 4,
        title: "Bitcoin Finance",
        imageUrl: project4,
        excerpt: "This is my project about bitcoin finance.",
        body: "body 4",
      },
      {
        id: 5,
        title: "Dice Challenge",
        imageUrl: project5,
        excerpt:
          "This is my project of ludo logic. When we reload the website then player 1 and 2 get random numbers from 1 to 6 and whose number is higher he win.",
        body: "body 5",
      },
      {
        id: 6,
        title: "Simon Website",
        imageUrl: project6,
        excerpt:
          "In this website when you click on any of 4 squares on the screen then the game continues or over depending upon the random numbers generated.",
        body: "body 6",
      },
      {
        id: 7,
        title: "Drum kit",
        imageUrl: project7,
        excerpt:
          "This drum kit website is amazing and when someone clicks on letters then sounds bloom. It is also done by keyboard keys.",
        body: "body 7",
      },
      {
        id: 8,
        title: "Resume",
        imageUrl: project8,
        excerpt:
          "This is my webpage of resume which i made it in my starting years.",
        body: "body 8",
      },
      {
        id: 9,
        title: "Best gadgets91",
        imageUrl: project9,
        excerpt: "This is my basic design of affiliate website.",
        body: "body 9",
      },
      {
        id: 10,
        title: "Mayank_Agarwal_personal_site",
        imageUrl: project10,
        excerpt: "This is my first portfolio website.",
        body: "body 10",
      },
    ],
  };

  async componentDidMount() {
    const [
      response_recommendation,
      response_skills,
      response_projects,
      response_blogs,
    ] = await Promise.all([
      axios.get("http://127.0.0.1:5000/api/recommendations"),
      axios.get("http://127.0.0.1:5000/api/skills"),
      axios.get("http://127.0.0.1:5000/api/projects"),
      axios.get("http://127.0.0.1:5000/api/blogs"),
    ]);

    const newState = {};

    if (
      response_recommendation.data.isSuccessful &&
      response_recommendation.data.results.length !== 0
    ) {
      newState.recommendations = response_recommendation.data.results;
    }

    if (
      response_skills.data.isSuccessful &&
      response_skills.data.results.length !== 0
    ) {
      newState.skills = response_skills.data.results;
    }

    if (
      response_projects.data.isSuccessful &&
      response_projects.data.results.length !== 0
    ) {
      newState.projects = response_projects.data.results;
    }

    if (
      response_blogs.data.isSuccessful &&
      response_blogs.data.results.length !== 0
    ) {
      newState.blogs = response_blogs.data.results;
    }

    this.setState(newState);
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
