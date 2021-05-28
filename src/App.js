import React from 'react';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationData: '',
      showMap: false,
      errorMessage: false
    }
  }

  updateSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }


  getCityLoc = async (event) => {
    event.preventDefault();
    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.f5fac729640499d87d250ea054dc2ad1&q=${this.state.searchQuery}&format=json`;

    try {

      let result = await axios.get(locUrl);
      this.setState({
        locationData: result.data[0],
        showMap: true,
      });

    } catch {
      this.setState({
        showLocation: false,
        errorMessage: true
      })

    }
  }


  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.getCityLoc} >
          <input type='text' placeholder='Enter a city name' onChange={this.updateSearchQuery} />
          <input type='submit' value='Explore!' />
        </form>
        <p>{this.state.locationData.display_name}</p>

        {this.state.showMap && 
        
        <img 
        src={`https://maps.locationiq.com/v3/staticmap?key=pk.9d61ed09f54a2a10035cdf02333644df&center=${this.state.locationData.lat},${this.state.locationData.lon}`}
        alt={this.state.locationData.display_name}
        />
        }
        
      {this.state.errorMessage &&
        <p>Data is not found</p>
      }

      </>
    )
  }

}

export default App;
