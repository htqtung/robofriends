import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

const App = () => {
  const [searchWord, setSearchWord] = useState('');
  const [robotArray, setRobotArray] = useState([]);
  /*
  fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    response.json();
  }).then(users => {
    this.setState({robots: users})
  })
  */
  useEffect(() => {
    const filteredRobots = robotArray.filter((robot) => {
      return robot.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setRobotArray(filteredRobots);
  }, [robotArray, searchWord]);
  if (robotArray.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchWord={searchWord} setSearchWord={setSearchWord} />
        <CardList robots={robotArray} />
      </div>
    );
  }
};

export default App;
