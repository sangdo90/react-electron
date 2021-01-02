import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';

import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
const store = configureStore();




ReactDOM.render(<App />, document.getElementById('root'));