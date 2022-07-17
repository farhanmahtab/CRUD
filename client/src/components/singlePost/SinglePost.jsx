import "./singlePost.css";
import { Link } from "react-router-dom";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImage"
          src="https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?cs=srgb&dl=pexels-pixabay-434337.jpg&fm=jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          <Link className="link" to="/post/:postId">
            Lorem ipsum dolor sit amet.
          </Link>
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Mahi</b>
          </span>
          <span className="singlePostDate">1 Hour Ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          laborum reprehenderit accusamus, possimus ullam repellendus harum
          nostrum officia, fugiat obcaecati aliquam omnis exercitationem. Quo
          hic consequatur porro eos ipsum ullam ipsam cupiditate officiis sint
          saepe odit accusantium quaerat expedita tempora dolorum illo harum
          corporis quasi fugiat magni maiores, ea a quam. Eaque excepturi
          perferendis ullam repudiandae, veniam perspiciatis quod hic! Expedita
          sequi explicabo vero cumque, id quis iure libero commodi vitae
          provident pariatur dolorum numquam rerum quos ipsum blanditiis
          repellendus asperiores quibusdam molestias quam natus ipsa eius!
          Voluptatem sunt quidem ea facere eligendi eos aut enim tempora! Alias
          reiciendis unde voluptates eaque atque esse praesentium eius in quis
          placeat nemo et excepturi, dolorum hic tenetur rem dicta nesciunt
          possimus id illo aut quia ad. Consectetur hic, laudantium consequuntur
          maxime amet illo explicabo asperiores exercitationem perspiciatis sed
          nostrum ex nam repellat aliquam pariatur. Error commodi eius nostrum
          maxime magnam facilis soluta.
        </p>
      </div>
    </div>
  );
}
