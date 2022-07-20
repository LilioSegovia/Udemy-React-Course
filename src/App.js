import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => 
    this.setState(
      () => {
      return {monsters:users}
    },
    () => {
      console.log(this.state)
    }
    ))
  }

  render() {
    return (
      <div className="App">
        <input className="search-box" type="search"/>
        {this.state.monsters.map((monsters) => {
            return <div key={monsters.id}>
              <h1>{monsters.name}</h1>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
