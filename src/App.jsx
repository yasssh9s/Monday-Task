import React from "react";
import CharacterList from "./components/CharacterList";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center m-6">
        Star Wars Characters
      </h1>
      <CharacterList />
    </div>
  );
};

export default App;
