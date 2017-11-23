import React, { Component } from "react";
import Form from "./Form";
import "./App.css";

export default class GighySelection extends Component {
  constructor() {
    super();
    this.state = {
      searchMode: true
    };
  }

  changeSearchMode = e => {
    const value = e.target.textContent;
    value === "Search"
      ? this.setState({ searchMode: true }, this.handleClearGifs)
      : this.setState({ searchMode: false }, this.handleClearGifs);
  };

  handleClearGifs = e => {
    this.props.clearGifs([]);
  };

  render() {
    return (
      <div className="giphySelectionContainer center">
        <div id="container">
          <div id="inner">
            <div className="child">
              <h1 className="align font" onClick={this.changeSearchMode}>
                Search
              </h1>
            </div>
            <div className="child">
              <hr className="font" width="1" size="30" />
            </div>
            <div className="child">
              <h1 className="align font" onClick={this.changeSearchMode}>
                Trending
              </h1>
            </div>
          </div>
        </div>
        <Form
          handleForm={this.props.handleForm}
          searchMode={this.state.searchMode}
        />
      </div>
    );
  }
}
