import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEL = document.getElementById('root');

let render = () => {
  ReactDOM.render(<App />, rootEL)
}

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render)
  })
}

render();

registerServiceWorker();
