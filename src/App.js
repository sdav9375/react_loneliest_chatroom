import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import MessageBox from './components/MessageBox';
import SendButton from './components/SendButton';
import LonelyButton from './components/LonelyButton';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <ChatWindow />
        <MessageBox />
        <SendButton />
        <br />
        <LonelyButton />
      </div>
    );
  }
}

export default App;
