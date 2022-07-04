import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { applyMiddleware } from 'redux';


import { legacy_createStore } from 'redux';
import ConnectM from './Redux/ConnectM';
import { Provider } from 'react-redux';
import Selector from './Redux/Selector';
import { rootReducer } from './Redux/rootReducer';
import thunk from 'redux-thunk';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

root.render(  

  <React.StrictMode>
<Provider store={store}>
{/* <Selector/> */}
<ConnectM/>
</Provider>

  </React.StrictMode>
);

