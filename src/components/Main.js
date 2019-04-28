import React from 'react';
import '../scss/main.scss';
import SingleMovie from './SingleMovie';
import Filter from './Filter';

import $ from 'jquery';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state= {}

    this.getMovies();
  }

  getMovies() {
    $.ajax({
      url: 'https://api.themoviedb.org/3/discover/movie?api_key=e73d0372f30e9daa5e350749a5a0c8b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
      success: (searchResults) => {
        const results = searchResults.results;

        var movieRows = []
        var total = null
        
        results.forEach((movie) => {
          const movies = <SingleMovie movie={movie} key={movie.id} />
          movieRows.push(movies)

          movie.poster_path = 'https://image.tmdb.org/t/p/w185'+movie.poster_path;
          
          const total = movieRows.length;
          this.setState({total: total})
        
        })

        this.setState({rows: movieRows})

      },
      error: (xhr, status, err) => {
        console.error('error')
      }
    }) 
  }

  render() {
    return (
      <div>
        <div className="container main">
        
          <div className="main__results">
            <div class="count">
              {this.state.total} movies
            </div>
            {this.state.rows}
          </div>

          <div className="main__filter">
            <Filter />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
