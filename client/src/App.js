import React, { Component } from 'react';
import './App.css';
//import rendered components
import ListPoke from "./components/ListPoke";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className={'titleHeader'}>POKEMON API</h1>
          {/*render ListPoke*/}
          <div className={'mapGrid'}>
              <ListPoke/>
          </div>
      </div>
    );
  }
}

export default App;
