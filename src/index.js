import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './components/Card';

ReactDOM.render(
  <>
  <h1 style={{display: 'flex', justifyContent: 'center'}}>Product Card </h1>
    <Card />
    </>,
  document.getElementById('root')
);
