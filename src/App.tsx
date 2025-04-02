import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

import { AppRouter } from "./AppRouter";

import "./global.css";

export function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col mx-auto px-4 max-w-5xl min-h-screen">
        <Header />

        <main className="flex-grow flex flex-col items-center">
          <AppRouter />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
