import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    //this function will be called inside the Child component and it will pass a value we can access from here.
    _onSearchSubmitCallback(term){
        console.log(term);
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: 10}}>
                <SearchBar _onSubmit={this._onSearchSubmitCallback} />
            </div>
        );
    }
}

export default App;

