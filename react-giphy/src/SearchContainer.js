import React, { Component } from 'react'



class SearchContainer extends Component {

  constructor() {  
    super()

    this.state = {
      gifs: ''
    }
  }

  handleChange =(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.Search(this.state.search)
    
  }



  render() {
    console.log("render() in SearchContainer is running");
    return (
      <div className="SearchContainer">
        <h2>Search Giphy</h2>
          <form>
            <div>
              <input 
              type="text"
              name="search"
              placeholder="Search for GIFs"
              onChange={this.handleChange}
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


export default SearchContainer