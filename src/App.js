import React from 'react';
import axios from 'axios';
import Weather from './Weather.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Movie from './Movie.js';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationData: '',
      showMap: false,
      errorMessage: false,
      lon: '',
      lat: '',
      weatherData: [],
      showWeather: false,
      movieData: [],
      showMovie: false
    }
  }

  updateSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }


  getCityLoc = async (event) => {
    event.preventDefault();
    let serverRoute = process.env.REACT_APP_SERVER;

    // for Location data 
    try {
      let locUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.f5fac729640499d87d250ea054dc2ad1&q=${this.state.searchQuery}&format=json`;
      let result = await axios.get(locUrl);
      this.setState({
        locationData: result.data[0],
        showMap: true,
        errorMessage: false,
        lon: result.data[0].lon,
        lat: result.data[0].lat,
      });

    } catch {
      this.setState({
        showMap: false,
        errorMessage: true
      });

    };

    // for weather data
    try {
      let url = `${serverRoute}/weather?city=${this.state.searchQuery}`
      let resultData = await axios.get(url);
      console.log(url);
      console.log(resultData);
      this.setState({
        weatherData: resultData.data,
        showWeather: true
      });

    } catch (error) {
      this.setState({
        weatherData: error.respose,
        showWeather: false

      });
    };


    //  for movies data
    try {
      let movieUrl = `${serverRoute}/movie?query=${this.state.searchQuery}`
      let movieResult = await axios.get(movieUrl);
      // console.log(movieUrl);
      // console.log(movieResult);
      // console.log(resultDat);
      this.setState({
        movieData: movieResult.data,
        showMovie: true
      });

    } catch (error) {
      this.setState({
        movieData: error.respose,
        showMovie: false

      });
    };



  };


  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>City Explorer</h1>
        <Form onSubmit={this.getCityLoc} style={{ textAlign: 'center' }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter a city name" onChange={this.updateSearchQuery} style={{ marginTop: '25px' }, { textAlign: 'center' }} />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ marginTop: '25px' }}>
            Explore!
          </Button>
        </Form>

        {this.state.showMap &&
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.9d61ed09f54a2a10035cdf02333644df&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt={this.state.locationData.display_name} />

            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>{this.state.locationData.display_name}</Card.Title>
              <Card.Text>
                {this.state.locationData.lat} <br></br>
                {this.state.locationData.lon}
              </Card.Text>
            </Card.Body>
          </Card>
        }

        {this.state.errorMessage &&
          <Alert variant="danger">
            The data for this city not found
          </Alert>
        }

          <Weather weatherData={this.state.weatherData} showWeather={this.state.showWeather} />
      
          <Movie movieData={this.state.movieData} showMovie={this.state.showMovie} />
        

      </>
    )
  }

};

export default App;
