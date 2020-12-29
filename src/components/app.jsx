import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

import giphy from 'giphy-api';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "Jrl4FlTaymFFbNiwU5"
    }
  }

  search = (query) => {
    giphy('WTy3r5FTCMgpKr6v2K94RCTfa26dhWBj').search({
        q: query,
        rating: 'g',
        limit: 5,
      }, (err, res) => {
        this.setState({
          gifs: res.data
        });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render(){
    const gifs = [
      {id: "Jrl4FlTaymFFbNiwU5"},
      {id: "Z9WQLSrsQKH3uBbiXq"}
    ]
    return(
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}  selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
