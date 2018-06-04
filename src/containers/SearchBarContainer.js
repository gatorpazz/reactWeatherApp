import React, { Component } from 'react'

export default class SearchBarContainer extends Component {
  state = {
    term: ''
  };

  handleChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className="input-group">
        <input
          type="text"
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={ this.state.term }
          onChange={ this.handleChange }
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}