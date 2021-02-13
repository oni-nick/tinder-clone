import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    // BEM class naming convetion
    <div className="App">
      {/* <h1>Lets build the MERN Tinder Clone Guys~!!</h1>      */}
    
      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <TinderCards />
      {/* Swipe Buttons */}
      <SwipeButtons />

    </div>
  );
}

export default App;
