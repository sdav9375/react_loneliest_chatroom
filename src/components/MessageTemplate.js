import React from 'react';
import PropTypes from 'prop-types';

const MessageTemplate = props => {
  let display;
  if (props.showMessage === false) {
    display = 'd-none';
  } else {
    display = ''; 
  }
  return (
    <li className={`media bg-light m-1 ${display}`}>
      <img className="mr-3 img-thumbnail" src="https://ih0.redbubble.net/image.96795026.0906/flat,64x64,075,t.jpg" alt = "Generic placeholder image" />
      <div className="media-body">
        <span className='timestamp'>{props.timestamp}</span>
        <button onClick={props.onClick}><i className="fas fa-times"></i></button>
        <h5 className="mt-0 mb-1">{props.author}</h5>
        {props.message}
      </div>
    </li> 
   
  );
};

MessageTemplate.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired, 
};

export default MessageTemplate;
