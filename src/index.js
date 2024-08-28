import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Chess(){
  return (
    <div>
      <App />
    </div>
  );
}
ReactDOM.render(<Chess />, document.getElementById('root'));