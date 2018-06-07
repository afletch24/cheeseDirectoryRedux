import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import './index.css';
import './fonts.css';
import { searchCheese } from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const store = createStore(searchCheese, applyMiddleware(logger));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')


);
registerServiceWorker();
