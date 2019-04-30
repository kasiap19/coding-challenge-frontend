import React from 'react';
import '../scss/main.scss';

class SingleMovie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props)
    
    return (
      <div className="movie">
      {this.props.movies}
        <div className="movie__img">
          <img src={this.props.movie.poster_path} alt={this.props.movie.title}></img>
        </div>
        <div className="movie__content content">
          <div className="content__title">
            <h3>{this.props.movie.title}</h3>
            <span>{this.props.movie.vote_average}</span>
          </div>
          <div className="content__genre">
            <b>{this.props.movie.genre_ids}</b>
          </div>
          <div className="content__description">
            <p>{this.props.movie.overview}</p>
          </div>

          <div className="content__year">
            <p>{this.props.movie.release_date}</p>
          </div>

        </div>
      </div>
    )
  }
}

export default SingleMovie