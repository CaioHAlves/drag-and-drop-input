import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';

import UpLoad from './UpLoad/UpLoad'
import Drop from './DragAndDrop/dragDrop'

ReactDOM.render(
  <React.StrictMode>
    <Drop />
  </React.StrictMode>,
  document.getElementById('root')
);
