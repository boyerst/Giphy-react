import React, { Component } from 'react';
import './App.css';
import GiphyContainer from './GiphyContainer'

class App extends Component {
  
  constructor() {
    console.log("constructor() in App.js is running")
    super()
    this.state={
      gifs:[],
  
    }
  }








  render() {
    return (
      <div className="giphyContainer">
        <GiphyContainer />
      </div>
    );
  }
}




export default App;
