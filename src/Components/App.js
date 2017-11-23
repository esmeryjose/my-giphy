import React, { Component } from "react";
import GiphyAdapter from "../Adapters/GiphyAdapter";
import GiphySelection from "./GiphySelection";
import GifCollection from "./GifCollection";
import AppBar from "material-ui/AppBar";
import Divider from "material-ui/Divider";
import SvgIcon from "material-ui/SvgIcon";
import "./App.css";

const iconStyles = {
  marginRight: 24,
  marginTop: 10
};

const HomeIcon = props => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      favorites: []
    };
  }

  clearGifs = gifs => {
    this.setState({ gifs });
  };

  handleForm = params => {
    let promise;

    params.searchMode
      ? (promise = GiphyAdapter.search(params))
      : (promise = GiphyAdapter.trending(params));

    promise.then(res => this.setState({ gifs: res.data }));
  };

  addFavorite = gif => {
    if (!this.state.favorites.includes(gif)) {
      this.setState(pState => ({ favorites: [...pState.favorites, gif] }));
    }
  };

  removeFavorite = gif => {
    this.setState(pState => {
      const favorites = pState.favorites.filter(myGif => myGif.id !== gif.id);
      return { favorites };
    });
  };

  render() {
    return (
      <div className="gradient">
        <AppBar
          iconElementLeft={<HomeIcon style={iconStyles} color={"#E0F7FA"} />}
          title="My Giphy Search"
        />
        <GiphySelection
          clearGifs={this.clearGifs}
          handleForm={this.handleForm}
        />
        <div className="gifCollection">
          <GifCollection
            gifs={this.state.gifs}
            action="perpendicular"
            handleGif={this.addFavorite}
          />
        </div>
        <Divider />
        <div className="gifCollection">
          <div>
            <h1 className="font">Favorites:</h1>
          </div>
          <GifCollection
            action="horizontal"
            gifs={this.state.favorites}
            handleGif={this.removeFavorite}
          />
        </div>
      </div>
    );
  }
}
