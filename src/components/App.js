// App.js
import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";

const user = {
  name: "Liza",
  city: "New York",
  bio: "I made this!",
  color: "red",
  links: {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  },
};

function App() {
  return (
    <div>
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <NavBar/>
    </div>
  );
}

export default App;
