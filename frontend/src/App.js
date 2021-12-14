import './App.css';
import React, {Component} from "react";
import {SocketContext, socket} from './context/socket';
import SocketComponent from './socket_component';

class App extends Component{

  render(){
    return (
      <div className="App">
        <header>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SocketContext.Provider value={socket}>
          <p>Here</p>
          <SocketComponent/>
        </SocketContext.Provider>
      </div>
    );
  

  }
}
export default App;
