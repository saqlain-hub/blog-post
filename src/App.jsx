import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first post",
      datetime: "Dec 12, 2023 02:00 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto, cumque magni esse quos minus nostrum tenetur nam eius accusamus similique libero, voluptate quibusdam qui iste, quis impedit optio aut.",
    },
    {
      id: 2,
      title: "My 2nd post",
      datetime: "Dec 13, 2023 01:00 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto, cumque magni esse quos minus nostrum tenetur nam eius accusamus similique libero, voluptate quibusdam qui iste, quis impedit optio aut.",
    },
    {
      id: 3,
      title: "My 3rd post",
      datetime: "Dec 25, 2023 04:05 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto, cumque magni esse quos minus nostrum tenetur nam eius accusamus similique libero, voluptate quibusdam qui iste, quis impedit optio aut.",
    },
    {
      id: 4,
      title: "My 4th post",
      datetime: "Jan 02, 2023 12:00 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto, cumque magni esse quos minus nostrum tenetur nam eius accusamus similique libero, voluptate quibusdam qui iste, quis impedit optio aut.",
    },
  ]);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
