import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './index.css';
import './fonts.css';
import { searchCheese } from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(searchCheese);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')


);
registerServiceWorker();
