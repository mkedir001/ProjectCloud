import React, { Component } from 'react';
import Header from './components/Header/header';
import Searchbar from './components/SearchBar/searchbar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: {
        name: ''
      },
      selectedPatient: null
    };

    this.videoSearch('surfboards')

  }

  videoSearch(term) {

    // YTSearch(
    //   { key: API_KEY, term: term },
    //   (videos) => {
    //     this.setState({
    //       videos: videos,
    //       selectedVideo: videos[0]
    //     })
    //   });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Searchbar />
      </div>
    );
  }
}

export default App;
