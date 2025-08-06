import React from "react";
import { Post } from "./components/posts/post/Post";
import { About } from "./pages/About";
import { Knowledgers } from "./pages/Knowledgers";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { TechLab } from "./pages/TechLab";
import { Contact } from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { Founders } from "./pages/Founders";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/founders" element={<Founders />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/posts/:slug" element={<Post />}></Route>
      <Route path="/techlab" element={<TechLab />}></Route>
      <Route path="/knowledgers" element={<Knowledgers />}></Route>
      <Route path="/users" element={<Knowledgers />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
