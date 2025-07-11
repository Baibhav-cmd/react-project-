import React from "react";
import "./App.css";
import Navigation from "./components/naugation/Navigation";
import Hero from "./components/body/Hero";
import Contacrform from "./components/form/Contacrform";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Contacrform />
    </div>
  );
}

export default App;
