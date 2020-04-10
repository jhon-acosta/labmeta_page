import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return(
      <div className="lg:bg-red-500 md:bg-green-400 sm:bg-black h-screen">
        <Header />
        <h1 className="lg:text-6xl text-sm text-yellow-500 text-center">Hello!!!!</h1>
      </div>
    )
  }
}

export default App;