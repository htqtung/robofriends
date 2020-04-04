import React from 'react';
//, { useState, useEffect }
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchWord={this.searchfield}
          setSearchWord={this.onSearchChange}
        />
        {this.state.robots.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        )}
      </div>
    );
  }
}

// const App = () => {
//   const [searchWord, setSearchWord] = useState('');
//   const [robotArray, setRobotArray] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         response.json();
//       })
//       .then((users) => {
//         setRobotArray(users);
//       });
//   }, []);
//   useEffect(() => {
//     const filteredRobots = robotArray.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchWord.toLowerCase());
//     });
//     setRobotArray(filteredRobots);
//   }, [robotArray, searchWord]);
//   if (robotArray.length === 0) {
//     return (
//       <div className="tc">
//         <h1 className="f1">RoboFriends</h1>
//         <p>Loading...</p>
//       </div>
//     );
//   } else {
//     return (
//       <div className="tc">
//         <h1 className="f1">RoboFriends</h1>
//         <SearchBox searchWord={searchWord} setSearchWord={setSearchWord} />
//         <CardList robots={robotArray} />
//       </div>
//     );
//   }
// };

// export default App;
