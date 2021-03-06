import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

ReactDOM.render(
  <ActionLink />,
  document.getElementById('container')
);
