import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;

// async function getCourseBySlug(slug) {
//   return fetch(baseUrl + "?slug=" + slug).then((response) => {
//     if (!response.ok) throw new Error("Network response was not ok.");
//     return response.json().then((courses) => {
//       return courses[0]; // should only find one course for a given slug, so return it.
//     });
//   });
// }

// useEffect(() => {
//   const slug = props.match.params.slug;
//   // from the path `/courses/:slug`

//   getCourseBySlug(slug).then((_course) => setValue(_course));
// }, [props.match.params.slug]);
//   const getSlug = async () => {
//         const resp = await fetch(
//           "http://localhost:5000/courses/" + "?slug=" + slug
//         );
//         const data = await resp.json();
//         console.log(data);
//         setValue(data);
//       };
//       getSlug();
//     }
//   }, [props.match.params.slug]);

// function FormIsValid() {
//   const _errors = {};
//   if (!value.Title) _errors.Title = "Title is Required";
//   if (!value.Author) _errors.Author = "Author is Required";
//   if (!value.Category) _errors.Category = "Category is Required";
//   setErrors(_errors);

//   //The form is valid if the _errors object has no properties
//   return Object.keys(_errors).length === 0; //if there is nothing there then it will return true that means it's valid. if false then it isn't!!
// }
