import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './app/App';
import productReducer from './store/reducers/productReducer';
import uiReducer from './store/reducers/uiReducer';

const rootReducer = combineReducers({
  products: productReducer,
  ui: uiReducer
});

const store = createStore(rootReducer,
      applyMiddleware(thunk)
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>      
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

