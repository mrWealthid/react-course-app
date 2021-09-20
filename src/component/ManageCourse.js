import { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const ManageCourse = (props) => {
  // const [errors, setErrors] = useState({});

  const [value, setValue] = useState({
    id: "",
    Title: "",
    Author: "",
    Category: "",
  });

  let history = useHistory();
  function handleValue({ target }) {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  }

  const { id } = useParams();
  let baseUrl = `http://localhost:5000/courses/${id}`;
  // const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
  // const Url = "http://localhost:5000/courses";
  useEffect(() => {
    axios
      .get(baseUrl)
      .then(({ data }) => {
        setValue({
          id: data.id,
          Title: data.Title,
          Author: data.Author,
          Category: data.Category,
        });
      })
      .catch((err) => console.log(err.name));
  }, [baseUrl]);

  function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      axios({
        method: "PUT",
        url: `http://localhost:5000/courses/${id}`,
        data: {
          Title: value.Title,
          Author: value.Author,
          Category: value.Category,
        },
      })
        .then(() => {
          history.push("/courses");
          toast.success("Course Updated.");
        })
        .catch((error) => console.log(error));
    } else {
      axios({
        method: "POST",
        url: "http://localhost:5000/courses",
        data: value,
      })
        .then(() => {
          history.push("/courses");
          toast.success("Course Added.");
        })
        .catch((error) => console.log(error));
    }

    // if (!FormIsValid()) return;
    // fetch(Url + (value.id || ""), {
    //   method: value.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.,
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(value),
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => setValue(data))
    //   .then(() => {
    //     props.history.push("/courses");
    //     value.id
    //       ? toast.success("Course Updated.")
    //       : toast.success("Course Added.");
    //   })
    //   .catch((error) => console.log(error));
  }

  return (
    <>
      <h1>Manage Course</h1>

      <CourseForm
        InputValue={value}
        handleValue={handleValue}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCourse;
