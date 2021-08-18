// import React, { useState } from "react";
import CourseContent from "./component/CourseContent";
import Header from "./component/Header";
import About from "./component/About";
import ManageCourse from "./component/ManageCourse";
import Homepage from "./component/HomePage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./component/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/courses" component={CourseContent} />
        <Route path="/About" component={About} />

        <Route path="/course/:id" component={ManageCourse} />
        <Route path="/course" component={ManageCourse} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
