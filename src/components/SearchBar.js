import React from 'react';

//Class based because we need to handle state of User input
class SearchBar extends React.Component{
    // _onInputChange(event){
    //     //(event) => {console.log(event.target.value)}//you can also pass this directly in the {}
    //     //YOU WILL NOT BE ABLE TO CALL this IN METHODS unless you bind it when you call it.
    //     console.log(event.target.value);
    // }
    // constructor(props){
    //     super(props);
    //     this.state = {term:'Hi'};
    // }

    state = {term:'Hi'};

    _onFormSubmit = (event) => {
        //as everytime the user preses enter in an input inside a form, we submit(by default)/refresh the screen;
        event.preventDefault();
        //console.log(this.state.term);//we CANNOT access this from within class methods unless we bind it or use arrow functions.
        this.props._onSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" action="" onSubmit={this._onFormSubmit}>
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={(e) => this.setState({term: e.target.value.toUpperCase()})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;