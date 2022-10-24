import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getEpisode } from "../../service/data-service";
import Post from "../Post/Post";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    getEpisode(id).then((data) => setPost(data));
  }, []);

  return post ? (
    <Post
      id={post.episode_number}
      img={post.img}
      title={post.title}
      season={post.season}
      episode={post.episode_in_season}
      director={post.directed_by}
      date={post.air_date}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default PostDetail;
