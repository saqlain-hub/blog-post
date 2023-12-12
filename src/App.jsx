import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

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
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");

    const newPost = { id, title: postTitle, datetime, body: postBody };

    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  };

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
