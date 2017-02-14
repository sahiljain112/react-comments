import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/container/App';
import Input from './components/test/Input';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import { TWO_COMMENTS, FIVE_COMMENTS } from './comments'

const WrappedComponent = Wrapper(Input, TWO_COMMENTS)
ReactDOM.render(
  <WrappedComponent />,
  document.getElementById('root')
);
