import "./App.css";
import CardList from "./Components/card-list/card-list";
import { useState, useEffect } from "react";
//import {Component} from "react";
import SearchBox from "./Components/search-box/search-box";

/*class App extends Component {*/
const App = () => {

  const [searchField, setSearchField] = useState("")
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters,setFilteredMonsters] = useState([monsters])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  },[])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  },[])

  
  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString)
    };

  return (
    <div className="App">
    <h1 className="app-title">Monster Rolodex</h1>
    <SearchBox
      className="monsters-search-box"
      onChangeHandler={onSearchChange}
      placeholder="search monsters"
    />
    <CardList monsters={filteredMonsters} />
  </div>

  )
}

  /*constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}*/

export default App;
