import React from 'react';
import MessageTemplate from './components/MessageTemplate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      author: 'Me',
      timestamp: `${new Date().toUTCString()}`,
      message: '',
      messages: [],
      showMessage: true,
    };

    this.getJoke = this.getJoke.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTimeAndAuthor = this.getTimeAndAuthor.bind(this);
    this.delete = this.delete.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const resp = JSON.parse(xhr.response);
        const joke = resp.value.joke;
        // return createJokeMessage(joke);
      }
    }
    xhr.open('GET', 'http://api.icndb.com/jokes/random', true);
    xhr.send(null);
  }


  handleInputChange(event) {
    this.setState({message: event.target.value });
  }

  getTimeAndAuthor() {
    let newTimestamp = () => new Date().toUTCString();
    this.setState({timestamp: newTimestamp()});
    let authorArr = ['Me', 'Myself', 'I'];
    let currentAuthor = this.state.author;
    let indexOfCurrentAuthor = authorArr.findIndex((author) => {
      return author === currentAuthor;});
    if (currentAuthor === 'I') {
      this.setState({author: 'Me'});
    } else {
      this.setState({author: authorArr[indexOfCurrentAuthor + 1]});
    }
  }

  delete() {
    console.log("clicked delete")
    this.setState({showMessage: false });
  }

  handleKeyPress(event) {
    if(event.key == 'Enter'){
      this.handleSubmit(event);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getTimeAndAuthor();
    let newMessage = {
      message: this.state.message,
      timestamp: this.state.timestamp,
      author: this.state.author,
      showMessage: true,
    };
    this.setState({messages: [...this.state.messages, newMessage]});
    this.setState({message: ''});
  }

  render() {
    return (
      <div className="container">
        <h2>THE WORLDS LONELIEST CHATROOM</h2>
        <h2>No friends? No problem!</h2>
        <div className="bg-warning" style={{height: '300px', overflow: 'auto'}}>
          <ul className="bg-aqua">
            {
              this.state.messages.map(message => 
                <MessageTemplate key={`${message.timestamp}${message.author}`} author={message.author} message={message.message} timestamp={message.timestamp} onClick={this.delete} showMessage={message.showMessage}
                />)
            }
          </ul>
        </div>
        <form onSubmit={this.handleSubmit}>
          <section className="new-message">
            <textarea
              type="text"
              className="form-control"
              name="messageBody"
              placeholder="Type here!"
              value={this.state.message}
              rows="3"
              cols="30"
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
            />
          </section>
          <button className="btn btn-primary" type="submit" value="Send">Send</button>
        </form>
        <br />
        <input type="button" className="btn btn-primary" value="I'm Lonely!" onClick={this.getJoke} />
      </div>
    );
  }
}

export default App;
