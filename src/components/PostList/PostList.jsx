import Post from "../Post/Post";
import posts from "../../data/friends-episodes.json";

const PostList = () => {
  const postsList = posts.slice(0, 8).map((post, i) => (
    <Post
      key={i}
      img={post.img}
      title={post.title}
      season={post.season}
      episode={post.episode_in_season}
      director={post.directed_by}
      date={post.air_date}
      views={post.us_viewers_in_millions}
    />
  ));

  return (
    <div className="post-list d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-center gap-5">
      {postsList}
    </div>
  );
};

export default PostList;
