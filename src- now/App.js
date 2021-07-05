import React from 'react'
import './App.css';
import {Card} from './components/Card';
import {cardList} from './components/Card-list/cardList';

function App() {
  return (
    <div className="App">

      < Card />
      < cardList /> 
    </div>
  );
}

export default App;
