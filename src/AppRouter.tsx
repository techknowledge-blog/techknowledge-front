import React from "react";
import {
  Route,
  Routes,
} from "../node_modules/react-router/dist/production/index";
import { Post } from "./components/posts/post/Post";
import { About } from "./pages/About";
import { Community } from "./pages/Community";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/post/:id" element={<Post />}></Route>
      <Route path="/community" element={<Community />}></Route>
    </Routes>
  );
}
