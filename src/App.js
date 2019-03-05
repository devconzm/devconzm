import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import Info from './components/Info'
import Speakers from './components/Speakers'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Info />
        <Speakers />
      </Fragment>
    );
  }
}

export default App;
