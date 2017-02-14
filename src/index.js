import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/container/App';
import Input from './components/test/Input';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import { TWO_COMMENTS, FIVE_COMMENTS, TEN_COMMENTS, TWENTY_COMMETS } from './comments'

const WrappedComponent = Wrapper(Input, TEN_COMMENTS)
const WrappedComponentTwo = Wrapper(Input, FIVE_COMMENTS)
const WrappedComponent1 = Wrapper(Input, TEN_COMMENTS)
const WrappedComponent2 = Wrapper(Input, TWENTY_COMMETS)
const WrappedComponent3 = Wrapper(Input, TEN_COMMENTS)
const WrappedComponent4 = Wrapper(Input, TEN_COMMENTS)
ReactDOM.render(
  <div>
    <WrappedComponent />
    <WrappedComponentTwo />
    <WrappedComponent1 />
    <WrappedComponent2 />
    <WrappedComponent3 />
    <WrappedComponent4 />
  </div>,
  document.getElementById('root')
);
