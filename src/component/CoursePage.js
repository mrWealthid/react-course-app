import { Link } from "react-router-dom";

//dumb component
const CoursePage = (props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Course Title</th>
            <th> Course Author</th>
            <th>Categories</th>
          </tr>
        </thead>

        <tbody>
          {!props.loading
            ? "Loading..."
            : props.courses.map((course) => (
                <tr key={course.id}>
                  <td>
                    <Link to={`/course/${course.id}`}> {course.Title}</Link>
                  </td>
                  <td> {course.Author}</td>
                  <td> {course.Category}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => props.handleDelete(course.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursePage;
