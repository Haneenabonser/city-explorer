import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      locationData: '',

    }
  }

  updateSearchQuery = (event) =>{
    this.setState({
      searchQuery : event.target.value
    })
  }

 
  getCityLoc = async (event) =>{
    event.preventDefault();
    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.f5fac729640499d87d250ea054dc2ad1&q=${this.state.searchQuery}&format=json`;
    let result = await axios.get(locUrl);
      this.setState({
        locationData: result.data[0],
      }); 

      console.log(this.state.locationData);
    }

    
  render(){
    return(
      <>
      <h1>City Explorer</h1>
      <form onSubmit={this.getCityLoc} >
        <input type='text' placeholder='Enter a city name' onChange={this.updateSearchQuery}/>
        <input type ='submit' value='Explore!' />
      </form>
      <p>{this.state.locationData.display_name}</p>
      </>
    )
  }

}

export default App;
