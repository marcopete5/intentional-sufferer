//NPM
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

//My Components
import App from './App';
import store from './Redux';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
           <App />
        </BrowserRouter>
    </Provider>,
     document.getElementById('root'));
