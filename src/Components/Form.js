import React, { Component } from "react";
import TextField from "material-ui/TextField";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      limit: ""
    };
    this.constructParams = this.constructParams.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps({ searchMode }) {
    if (!searchMode) {
      const search = "";
      this.setState({ search });
    }
  }

  handleChange(e) {
    const val = e.target.value;
    const property = e.target.id;
    this.setState({ [property]: val }, this.constructParams);
  }

  constructParams() {
    const newLimit = this.state.limit.trim();
    if (!!this.props.searchMode || !!newLimit) {
      const { searchMode } = this.props;
      const params = { ...this.state, searchMode };
      this.props.handleForm(params);
    }
  }

  searchInput = () => (
    <TextField
      floatingLabelText="Search Here..."
      id="search"
      value={this.state.search}
      onChange={this.handleChange}
    />
  );

  render() {
    return (
      <div>
        {this.props.searchMode ? this.searchInput() : null}
        <TextField
          floatingLabelText="Limit"
          id="limit"
          value={this.state.limit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
