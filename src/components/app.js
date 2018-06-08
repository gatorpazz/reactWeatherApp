import React, { Component } from 'react';

import SearchBarContainer from '../containers/SearchBarContainer';
import WeatherContainer from '../containers/WeatherContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer />
        <WeatherContainer />
      </div>
    );
  }
}
