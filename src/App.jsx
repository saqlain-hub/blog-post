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
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
