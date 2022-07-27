import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { PersonList } from './components/PersonList';

function App() {
  const nameList = [
    {
      first:'Bruce',
      last:'wayne'
    },
    {
      first:'Clark',
      last:'Kent'
    },
    {
      first:'Princess',
      last:'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name ='Akshay' messagenum={20}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
