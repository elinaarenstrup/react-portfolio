import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Favorite } from "./components/Favorite";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { Thoughts } from "./components/Thoughts";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Favorite />
      <Tech />
      <Projects />
      <Thoughts />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
