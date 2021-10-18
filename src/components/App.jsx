import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(object) {
  return (
    <Entry 
      key={object.id}
      emoji={object.emoji}
      name={object.name}
      meaning={object.meaning}
      id={object.id}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;