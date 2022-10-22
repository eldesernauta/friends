import Post from "../Post/Post";
import posts from "../../data/friends-episodes.json";
const initialState = [];

const PostList = (props) => {
  const filteredPosts = posts.filter((e) => {
    if (props.input === "") {
      return e;
    } else {
      return e.title.toLowerCase().includes(props.input);
    }
  });

  return (
    <div className="post-list d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-center gap-5">
      {filteredPosts === initialState
        ? "Loading..."
        : filteredPosts
            .slice(0, 24)
            .map((post, i) => (
              <Post
                key={i}
                img={post.img}
                title={post.title}
                season={post.season}
                episode={post.episode_in_season}
                director={post.directed_by}
                date={post.air_date}
              />
            ))}
    </div>
  );
};

export default PostList;
