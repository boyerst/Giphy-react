import React, { Component } from 'react'



class GiphyContainer extends Component {

  constructor(props) {
    console.log("contructor() in GiphyContainer is running");    
    super(props)

    this.state = {
      search: ''
    }
  }

  handleChange =(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.Search(this.state.query)
    
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


export default GiphyContainer