  
import React, { Component } from 'react'
import SearchContainer from './SearchContainer'

class GifContainer extends React.Component{
  constructor(){
    super()
    this.state={
   
      gifs: [],
      search: '',

    }
  }

  searchGifs = async () => {
    try {
      const response = await('http://api.giphy.com/v1/gifs/search?api_key=cyzMNKd8RhrYjc7Abed1BSmoRLWCZwpJ')
      const data = await response.json()
      console.log(data)
      this.setState({
        gifs: data.data
      })
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <h2>Gifs</h2>
        <SearchContainer searchGifs={this.searchGifs}/>
     </div>
    )
  }
}

export default GifContainer

cyzMNKd8RhrYjc7Abed1BSmoRLWCZwpJ