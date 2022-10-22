
import { useState, useEffect } from "react";
import './App.css';
import './styles/styles.scss'
import NavBar from './components/Header/NavBar'
import Main from './components/Main/Main';
import PostList from './components/PostList/PostList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setPosts(!posts)
    }, 3000)
  }, [])

  let searchHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };
  return (
    <div className="App">
      <NavBar />
      <Main>
        <SearchBar placeholder="Search" onSearch={searchHandler} />
        {posts === false ? "Loading..." : posts && <PostList input={search} />}
      </Main>
    </div>
  );
}

export default App;
