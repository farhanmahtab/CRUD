import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImage"
        src="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        
        <hr />
        <span className="postDate">1hr Ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorum, rem, quas esse excepturi officiis ut obcaecati sed placeat quam minus officia consectetur eveniet veritatis voluptate repellat voluptatem libero ullam? Facere, harum! Asperiores tempora, fugiat architecto nisi repellendus, quisquam nesciunt minus accusamus molestias, debitis nam suscipit ipsam id ullam. Eos culpa voluptate dolorum vitae neque, esse autem blanditiis quisquam! Vero impedit distinctio eligendi, vitae voluptatum maiores rerum placeat sequi accusamus est illo ad nam nemo?
      </p>
    </div>
  );
}
