import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';




class Movie extends React.Component {
    render() {
        return (
            <div style={{ display: 'inline-block' }}>
                { this.props.showMovie &&

                    <Card className='movies' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.movie.image_url} alt={this.props.movie.title} style={{ height: '20rem' }}/>

                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title>{this.props.movie.title}</Card.Title>
                            {/* <Card.Text>
                                Overview: {this.props.movie.overview}
                            </Card.Text> */}
                            <Card.Text>
                                Avg Votes: {this.props.movie.average_votes}
                            </Card.Text>
                            <Card.Text>
                                Total Votes: {this.props.movie.total_votes}
                            </Card.Text>
                            <Card.Text>
                                Popularity:  {this.props.movie.popularity}
                            </Card.Text>
                            <Card.Text>
                                Released on: {this.props.movie.released_on}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                }
            </div>
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