import React, { Component } from "react";
import CardContainer from "./components/CardContainer";
import SearchBox from "./components/SearchBox.jsx";
import Scroll from "./components/Scroll.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ cats: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const filteredCat = this.state.cats.filter((cats) => {
      return cats.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return !this.state.cats.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="App tc">
        <h1 className="title white">Crazy Kittens</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <p
          style={{
            background: "white",
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
  }
}

export default App;
