// import "./App.css";
// import Blogcontent from "./component/Blogcontent";
// import React, { useState } from "react";
// import Button from "./component/Button";

// function App() {
//   const [show, setShow] = useState(true);
//   const [BlogPost, updateBlogPost] = useState([
//     {
//       id: 1,
//       title: "Blog-Title 1",
//       content:
//         "Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum Dolor",
//       likeCount: 0,
//     },
//     {
//       id: 2,
//       title: "Blog-Title 2",
//       content:
//         "Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum Dolor",
//       likeCount: 0,
//     },

//     {
//       id: 3,
//       title: "Blog-Title 3",
//       content:
//         "Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum Dolor",
//       likeCount: 0,
//     },
//   ]);

//   const hidecontent = () => {
//     setShow(!show);
//   };

//   const onlikeBtn = (id) => {
//     updateBlogPost(
//       BlogPost.map((post) =>
//         post.id === id ? { ...post, likeCount: post.likeCount + 1 } : post
//       )
//     );
//   };

//   return (
//     <div className="App">
//       <Button text={show ? "Hide" : "Show"} hidecontent={hidecontent} />
//       {BlogPost.map((blog, pos) => {
//         return show ? (
//           <Blogcontent
//             content={blog}
//             key={blog.id}
//             mybtn={() => onlikeBtn(blog.id)}
//           />
//         ) : null;
//       })}
//     </div>
//   );
// }

// export default App;
