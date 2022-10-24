
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import './App.css';
import './styles/styles.scss'
import NavBar from './components/Header/NavBar'
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Profile from './components/Profile/Profile';
import { Routes, Route } from "react-router";
import PostDetail from "./components/PostDetail/PostDetail";


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))

  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    } else {
      navigate('/episodes')
    }
  }, [token])

  return (
    <div className="App">
      <NavBar />
      <Main>

        <Routes>
          <Route path="/episodes" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/episodes/:id" element={<PostDetail />}></Route>
        </Routes>

      </Main>
    </div>
  );
}

export default App;
