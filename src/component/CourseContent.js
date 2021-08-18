import CoursePage from "./CoursePage";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

//smart component
const CourseContent = (props) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCourses = () => {
    setLoading(false);

    fetch("http://localhost:5000/courses")
      .then((resp) => resp.json())

      .then((data) => setCourses(data), setLoading(true))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCourses();
  }, []);

  //to avoid repeated async call use the use Effect
  // const getCourses = async () => {
  //   const res = await fetch("http://localhost:5000/courses");
  //   const data = await res.json();
  //   console.log(data);
  // };
  // getCourses();

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/courses/${id}`, {
      method: "DELETE",
    });
    setCourses(courses.filter((post) => post.id !== id));
    toast.error("Course Deleted.");
  };

  return (
    <div>
      <h1>Courses </h1>

      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>

      <CoursePage
        courses={courses}
        loading={loading}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default CourseContent;
