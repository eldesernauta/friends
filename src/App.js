import './App.css';
import './styles/styles.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import PostList from './components/PostList/PostList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <SearchBar />
        <PostList/>
      </Main>
    </div>
  );
}

export default App;
