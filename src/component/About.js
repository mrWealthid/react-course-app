import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="Jumbotron-fluid mt-4 container">
      <h1 className="lead"> This app uses React🎉</h1>

      <Link to="/courses" className="btn btn-primary">
        Course Page
      </Link>
    </div>
  );
};

export default About;
