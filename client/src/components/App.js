import React from 'react';
//import {BrowserRouter, Route} from 'react-router-dom';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';//custom history, we need Router(plain router)

import Header from './Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';

//you can have duplicated Route components both pointing at the same path: as you can have deeply nested components
//exact -> so that you only show the page if the '/path' is exact:
//eg: NO exact -> Page1) '/' Page2) '/any' -> will show both Page1 and Page2
// exact === exact={true}
// it prevents the urlPath.contains('/yourpathinRoute') and changes it to urlPath === '/yourpathinRoute'

function App() {
  return (
    <div className="ui container">
        
        <Router history={history}>
        <Header/>
          <Switch>
            {/* <Route path="/" exact component={StreamList}/> */}
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
