import { useState, useEffect } from "react";
import PostList from "../PostList/PostList";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setPosts(!posts);
    }, 3000);
  }, []);

  const searchHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  return (
    <>
      <SearchBar placeholder="Search" onSearch={searchHandler} />
      {posts === false ? "Loading..." : posts && <PostList input={search} />}
    </>
  );
};

export default Home