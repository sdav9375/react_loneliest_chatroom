import React from 'react';

class MessageBox extends React.Component {
  render() {
    return(
      <section class="new-message">
        <textarea name="message-body" id="new-message-body" cols="30" rows="5" placeholder="Type here!"></textarea>
        
      </section>
    )
  }
}

export default MessageBox;
