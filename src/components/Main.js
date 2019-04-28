import React from 'react';
import '../scss/main.scss';
import SingleMovie from './Movie';
import Filter from './Filter';

class Main extends React.Component {
  constructor(props) {
    super(props)

    const movies = [
      {id: 0, title: 'xx', description: 'yyy'},
      {id: 1, title: 'ee', description: 'ooo'}
    ]

    const result = []

    // for each movies
    movies.forEach((movie) => {
      const movieRow = <SingleMovie movie={movie}/>
      result.push(movieRow)
    })

    this.state = {result: result}
  }

  render() {
    return (
      <div>
        <div className="container main">
          <div className="main__results">
            {this.state.result}
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
