import React, { useState, useEffect } from "react";
import CardContainer from "./components/CardContainer";
import SearchBox from "./components/SearchBox.jsx";
import Scroll from "./components/Scroll.jsx";

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     cats: [],
  //     searchfield: "",
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((users) => this.setState({ cats: users }));
  // }
  const [cats, setCats] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setCats(users));

      return () => {
        setCats([]);
      };
  }, []);

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredCat = cats.filter((cats) => {
    return cats.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !cats.length ? (
    <h1 style={{ color: "white" }}>Loading</h1>
  ) : (
    <div className="App tc">
      <h1 className="title white">Funny Kittens</h1>
      <SearchBox searchChange={onSearchChange} />
      <p
        style={{
          background: "darkgreen",
          borderRadius: "25px",
          padding: "15px",
          margin: "55px",
        }}
      >
        type in your letters to filter the kittens,until only one left
      </p>
      <Scroll>
        <CardContainer cats={filteredCat} />
      </Scroll>
    </div>
  );
};

export default App;
