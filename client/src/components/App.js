import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne</div>
}

const PageTwo = () => {
    return <div>PageTwo</div>
}

//you can have duplicated Route components both pointing at the same path: as you can have deeply nested components
//exact -> so that you only show the page if the '/path' is exact:
//eg: NO exact -> Page1) '/' Page2) '/any' -> will show both Page1 and Page2
// exact === exact={true}
// it prevents the urlPath.contains('/yourpathinRoute') and changes it to urlPath === '/yourpathinRoute'

function App() {
  return (
    <div className="ui container">
        <BrowserRouter>
            <Route path="/" exact component={PageOne}/>
            <Route path="/" exact component={PageOne}/>
            <Route path="/pageTwo" component={PageTwo}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
