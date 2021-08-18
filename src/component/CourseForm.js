import React from "react";
import InputComp from "./InputComp";

const CourseForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className=" col-9 mx-auto p-4">
      <InputComp
        type="text"
        name="Title"
        className="form-control"
        value={props.InputValue.Title}
        onChange={props.handleValue}
      />

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Course Tutor:
        </label>
        <select
          type="Select"
          name="Author"
          className="form-control"
          // className={
          //   !props.errors.Author ? "form-control" : "form-control error-border"
          // }
          value={props.InputValue.Author}
          onChange={props.handleValue}
        >
          <option value="Select Tutors">Select Tutors</option>
          <option value="Wealth Iduwe">Wealth Iduwe</option>
          <option value="Benjamin Iduwe">Benjamin Iduwe</option>
        </select>
        {/* {props.errors.Author && (
          <div className="alert alert-danger">{props.errors.Author}</div>
        )} */}
      </div>

      <InputComp
        label="Course Category:"
        type="text"
        name="Category"
        className="form-control"
        value={props.InputValue.Category}
        onChange={props.handleValue}
        // error={props.errors.Category}
      />

      <button type="submit" className="btn btn-primary">
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
