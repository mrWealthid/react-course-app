import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className=" container mt-4 bg-light border">
      <div className="row p-4 mt-2">
        <h1 className=" p-2">Wealth React Course Administration</h1>
        <small>
          React, React Hooks, React Form Validation, Ajax Calls Using A Mock
          Database(Json Server) & React Router For ultra-responsive CRUD web
          apps.
        </small>
      </div>
      <div className="d-grid px-4 col-2">
        <Link className="btn btn-xm btn-primary my-4 " to="/about">
          About
        </Link>{" "}
      </div>
    </div>
  );
};

export default HomePage;
