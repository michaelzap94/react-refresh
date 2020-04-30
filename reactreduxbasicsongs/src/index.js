import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App'
import reducers from './reducers';

//Wire up react and redux, using react-redux's Provider, passing the Store from Redux as a prop
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);