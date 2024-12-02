import React from "react";
import {
  Route,
  Routes,
} from "../node_modules/react-router/dist/production/index";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
    </Routes>
  );
}
