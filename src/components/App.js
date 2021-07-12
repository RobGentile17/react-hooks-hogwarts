import React, { useState } from "react";
import Nav from "./Nav";
import HogsList from "./HogsList";
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
const [isGreased, setIsGreased] = useState(false)
const [sortBy, setSortyBy] = useState("name")

const displayHogs = hogs
.filter((hog) => (isGreased ? hog.greased : true))

  return (
    <div>
      <Nav />
      <Filter 
        isGreased={isGreased}
        setIsGreased={setIsGreased}
      />
      <HogsList hogs={displayHogs}/>
    </div>
  );
}

export default App;
