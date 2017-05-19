import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game.jsx';
import Links from './components/links.jsx';

const start = (
  <div>
    <Links />
    <Game />
  </div>
);

ReactDOM.render(start, document.getElementById('react'));
