import React, { Component } from 'react'



class GiphyContainer extends Component {

  constructor(props) {
    console.log("contructor() in GiphyContainer is running");    
    super(props)

    this.state = {
      gifs: [] 
    }
  }


  render() {
    console.log("render() in GiphyContainer is running");
    return (
      <React.Fragment>
        <p>GiphyContainer</p>
        <p><small>Search Gifs</small></p>
    
      </React.Fragment>
    )
  }

}


export default GiphyContainer