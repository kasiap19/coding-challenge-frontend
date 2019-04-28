import React from 'react';
import '../scss/main.scss';

class SingleMovie extends React.Component {
  render() {
    return (
      <div className="movie" key={this.props.movie.id}>
        <div className="movie__img">
          img
        </div>
        <div className="movie__content content">
          <div className="content__title">
            <p>{this.props.movie.title}</p>
            <span>score</span>
          </div>
          <div className="content__gender">
            gender
          </div>
          <div className="content__description">
            <p>description</p>
          </div>

          <div className="content__year"></div>

        </div>
      </div>
    )
  }
}

export default SingleMovie