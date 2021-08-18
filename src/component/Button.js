import React from "react";

const Button = ({ content }) => {
  return (
    <>
      {content.map((course) => (
        <div>
          <h2>{course.Title}</h2>
          <p>{course.course}</p>
        </div>
      ))}
    </>
  );
};

// Button.defaultProps = {
//   text: "Likes",
// };

export default Button;
