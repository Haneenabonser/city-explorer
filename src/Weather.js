import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


class Weather extends React.Component {



    render() {
        return (
            <div style={{display:'inline-block'}}>
                {this.props.showWeather &&
                <ListGroup>
                    
                <ListGroup.Item action variant="success">
                {this.props.weather.date} <br></br>
                {this.props.weather.description}
                </ListGroup.Item>
        
                </ListGroup>
                }

            </div>

        )
    }
}


export default Weather;