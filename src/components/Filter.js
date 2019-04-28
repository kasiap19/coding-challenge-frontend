import React from 'react';
import '../scss/main.scss';
import $ from 'jquery';

class Filter extends React.Component {
  state = {
    genre: false,
    categories: false,
  };


  toggleGenre = () => {
    this.setState({ genre: !this.state.genre })  
  }


  toggleVote = () => {
    this.setState({votes: !this.state.votes})
  }

  test = event => {
    event.target.parentNode.parentNode.parentNode.classList.toggle('active')
  }

  render() {
    const  {genre} = this.state
    return (
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
            <input placeholder="Search"></input>
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
            {genre && <div>
            
            <ul>
              <li>
                <label>
                  <input type="checkbox"></input>
                  <span>one</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox"></input>
                  <span>two</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox"></input>
                  <span>three</span>
                </label>
              </li>
            </ul>
            </div>
            } 
          </div>  
          {/* end of categories */}
          

          <div className="categories__vote">
          <button onClick={this.toggleVote} className={this.state.votes === true ? 'active' : ''}>
            <span> Select min. vote</span>
          </button>
          {/* { vote && 
            <div>
              <ul>
              <li>
                <label>
                  <input type="checkbox"></input>
                  <span>one</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox"></input>
                  <span>two</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox"></input>
                  <span>three</span>
                </label>
              </li>
            </ul>
            </div>
          } */}
          </div>
        </div>
      </div>

    )
  }
}

export default Filter