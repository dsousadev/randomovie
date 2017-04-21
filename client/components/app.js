import React from 'react';
import RandomButton from './randomButton.js';
import MovieView from './movieView.js'
var axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMovie: {}
    };
  }
  generateRandomID() {
    function pad (number, length) {
      var str = '' + number;
      while(str.length < length) {
        str = '0' + str;
      }
      return str;
    }
    return 'tt' + pad(Math.floor((Math.random() * 2155529) + 1), 7);
  }
  requestRandomMovie() {
    var app = this;
    axios.get('http://www.omdbapi.com/?i=' + this.generateRandomID() + '&type=movie&plot=full')
      .then(function(response){
        if (!response.data.Response || response.data.Genre === 'Adult' || response.data.Poster === 'N/A') {
          app.requestRandomMovie();
        } else {
          app.setState({currentMovie: response.data});
        }
      });
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <RandomButton onClick={this.requestRandomMovie.bind(this)}/>
        <MovieView currentMovie={this.state.currentMovie} />
      </div>
    );
  }
}

export default App;
