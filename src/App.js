import React, { useState } from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>hello from app.js</p>
        <Todo />
        <Todo />
      </header>
    </div>
  );
}

export default App;