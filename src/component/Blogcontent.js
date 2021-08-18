function Blogcontent({ content, mybtn }) {
  return (
    <div className="BlogCards">
      <h4> {content.title}</h4>
      <p>{content.content}</p>
      <p>
        LikeCount: <span>{content.likeCount} </span>
      </p>

      <button onClick={mybtn}>Likes</button>
    </div>
  );
}
export default Blogcontent;
