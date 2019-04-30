import React from 'react';
import '../scss/main.scss';
import SingleMovie from './SingleMovie';

import $ from 'jquery';
import { SIGTSTP } from 'constants';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      movieRows : [],
      genres: [],
      genre: false,
      vote: false,
    }

    this.getMovies('a');
  }

  getMovies(searchItem) {
    $.ajax({
      url: 'https://api.themoviedb.org/3/search/movie?api_key=e73d0372f30e9daa5e350749a5a0c8b4&query='+searchItem,
      success: (searchResults) => {
        const results = searchResults.results;

            // var mov÷ieRows = []
            var total = null
            
            results.forEach((movie) => {
              
               
              const movies = <SingleMovie movie={movie}  key={movie.id} />
              this.state.movieRows.push(movies)

              movie.poster_path = 'https://image.tmdb.org/t/p/w185'+movie.poster_path;
              
              this.state.genres.push(movie.genre_ids)


              const total = this.state.movieRows.length;
              this.setState({total: total})
        
            })

            this.setState({rows: this.state.movieRows})
            // console.log(this.state.rows)
        },
      error: (xhr, status, err) => {
        console.error('error')
      }
    });

    $.ajax({
      url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=e73d0372f30e9daa5e350749a5a0c8b4',
      success: (data) => {
        const allGenres = data.genres
        
        const genres = [];
        allGenres.forEach((a) => {
          genres.push(
          <li>
            <label>
                <input type="checkbox"></input>
                <span>{a.name}</span>
              </label>
          </li>
          )
        })

        this.setState({genres: genres})
      }
    })
  };

  toggleGenre = () => {
    this.setState({ genre: !this.state.genre })  
  };

  onChange(e) {
    const searchItem = e.target.value
    this.getMovies(searchItem)
  } 

  render() {
    return (
      <div>
        <div className="container main">
        
          <div className="main__results">
            <div className="count">
              {this.state.total} movies
            </div>
            {this.state.rows}
          </div>

          <div className="main__filter">
          <div className="filter">
        <div className="header-mobile">
        <button className="hamburger" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          <p>Discover</p>
        </button>
        </div>
        <div className="filter__search search" id="search">
          <div className="search__input">
            <input placeholder="Search" onChange={this.onChange.bind(this)}></input>
          </div>
          <div className="search__year">
            <input placeholder="Year of release" onClick={this.test}></input>
          </div>
        </div>

        <div className="filter__categories categories">
          <h2>Movie</h2>

          {/* genre */}
          <div className="categories__genre">
            <button onClick={this.toggleGenre} className={this.state.visible === true ? 'active' : ''}>
              <span>Select genre(s)</span>
            </button>
            {this.state.genre && 
            <ul>
              {this.state.genres}
            </ul>
   
            } 
          </div>  
          {/* end of categories */}
          

          <div className="categories__vote">
          <button onClick={this.toggleVote} className={this.state.votes === true ? 'active' : ''}>
            <span> Select min. vote</span>
          </button>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;