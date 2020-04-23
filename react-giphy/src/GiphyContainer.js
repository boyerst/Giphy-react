import React, { Component } from 'react'



class GiphyContainer extends Component {

  constructor(props) {
    console.log("contructor() in GiphyContainer is running");    
    super(props)

    this.state = {
      
    }
  }


  render() {
    console.log("render() in GiphyContainer is running");
    return (
      <div className="GiphyContainer">
        <h2>Search Giphy</h2>
          <form>
            <div>
              <input 
              type="text"
              name="search"
              placeholder="Search for GIFs"
              />
            </div>
            <div>
              <button>Search</button>
            </div>
          </form>
        </div>
    )
  }

}


export default GiphyContainer