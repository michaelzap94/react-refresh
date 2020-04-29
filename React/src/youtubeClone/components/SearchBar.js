import React from 'react';
class SearchBar extends React.Component{
    state = {term: ''};

    _onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        this.props._onSubmit(this.state.term);
    }

    render(){

        return (
            <div className="ui segment">
                <form className="ui form" action="" onSubmit={this._onFormSubmit}>
                    <div className="field">
                        <label htmlFor="">Video Search</label>
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