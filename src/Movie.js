import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';




class Movie extends React.Component {
    render() {
        return (
            <>
                {this.props.movieData.length !== 0 && this.props.showMovie &&
                
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.movieData.image_url} alt={this.props.movieData.title} />

                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title>{this.props.movieData.title}</Card.Title>
                            <Card.Text>
                                {this.props.movieData[0].overview} <br></br>
                                {this.props.movieData[0].average_votes} <br></br>
                                {this.props.movieData[0].total_votes} <br></br>
                                {this.props.movieData[0].popularity} <br></br>
                                {this.props.movieData[0].released_on}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                }
            </>
        )
    }

}
// this.title = item.original_title;
//         this.overview = item.overview;
//         this.average_votes = item.vote_averag;
//         this.total_votes = item.vote_count;
//         this.image_url =`https://image.tmdb.org/t/p/w500${item.poster_path}`;
//         this.popularity= item.popularity;
//         this.released_on = item.release_date;

export default Movie;