import React from "react";
import "./styles.css";
import RenderPokeCard from "./components/PokeCard";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to your second mini challenge!</h1>
      <RenderPokeCard />
    </div>
  );
}
