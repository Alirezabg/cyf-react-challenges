import "./App.css";
import React from "react";
import SearchBar from "./component/search";
import ChildList from "./component/ChildList";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <ChildList />
    </div>
  );
}

export default App;
