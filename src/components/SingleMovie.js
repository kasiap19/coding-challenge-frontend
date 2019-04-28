import React from 'react';
import '../scss/main.scss';

class SingleMovie extends React.Component {
  render() {
    return (
      <div className="movie">
        <div className="movie__img" key={this.props.movie.id}>
          <img src={this.props.movie.poster_path} alt={this.props.movie.title}></img>
        </div>
        <div className="movie__content content">
          <div className="content__title">
            <h3>{this.props.movie.title}</h3>
            <span>{this.props.movie.vote_average}</span>
          </div>
          <div className="content__genre">
            gender
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