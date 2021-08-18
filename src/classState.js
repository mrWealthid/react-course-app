// import "./App.css";
// import Blogcontent from "./component/Blogcontent";
// import React from "react";
// import Button from "./component/Button";

// class App extends React.Component {
//   state = {
//     show: true,
//     BlogPost: [
//       {
//         id: 1,
//         title: "Blog-Title 1",
//         content:
//           "Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum Dolor",
//         likeCount: 0,
//       },
//       {
//         id: 2,
//         title: "Blog-Title 2",
//         content:
//           "Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum Dolor",
//         likeCount: 0,
//       },

//       {
//         id: 3,
//         title: "Blog-Title 3",
//         content:
//           "Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum DolorLorem ipsum Dolor",
//         likeCount: 0,
//       },
//     ],
//   };

//   hidecontent = () => {
//     this.setState((prevstate, prevprop) => {
//       return { show: !prevstate.show };
//     });
//   };

//   onlikeBtn = (pos) => {
//     // alert("Btn Clicked at pos => " + pos);
//     const updatedList = this.state.BlogPost;
//     const updatedBlogs = updatedList[pos];
//     updatedBlogs.likeCount = updatedBlogs.likeCount + 1;
//     updatedList[pos] = updatedBlogs;

//     this.setState({ BlogPost: updatedList });
//     console.log(updatedBlogs);
//   };

//   render() {
//     return (
//       <div className="App">
//         {this.state.BlogPost.map((blog, pos) => {
//           return this.state.show ? (
//             <Blogcontent
//               content={blog}
//               key={blog.id}
//               mybtn={() => this.onlikeBtn(pos)}
//               // pos={pos}
//             />
//           ) : null;
//         })}

//         <Button
//           text={this.state.show ? "Hide" : "Show"}
//           hidecontent={this.hidecontent}
//         />
//       </div>
//     );
//   }
// }
// export default App;
