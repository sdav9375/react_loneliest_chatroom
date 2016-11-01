import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import MessageBox from './components/MessageBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Header />
          <h2>Loneliest Chatroom</h2>
          <h2>No friends? No problem!</h2>
        </div>

        <ChatWindow />
        <MessageBox />
      </div>
    );
  }
}

export default App;
