import React from 'react';
import '../scss/main.scss';

class Filter extends React.Component {
  state = {
    genre: false,
    votes: false
  };


  toggleGenre = () => {
    this.setState({ genre: !this.state.genre })  
  }


  toggleVote = () => {
    this.setState({votes: !this.state.votes})
  }

  render() {
    const  {genre} = this.state
    return (
      <div class="filter">
        <div className="filter__search search">
          <div className="search__input">
            <input placeholder="Search"></input>
          </div>
          <div className="search__year">
            <input placeholder="Year of release"></input>
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

          <div class="categories__vote">
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