import React from 'react';
import {connect} from 'react-redux';

import {selectSongActionCreator} from '../actions';


class SongList extends React.Component{

    _renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={(e)=>{this.props.selectSongActionCreator(song)}}>
                            Select
                        </button>
                    </div>
                    <div className="content"> 
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render(){
        //console.log(this.props);if NO Action Creator is passed in .connect()//{songs: Array(4), dispatch: ƒ}
        //console.log(this.props);if an Action Creator is passed in .connect()//{songs: Array(4), selectSongActionCreator: ƒ ()}
        // We can use either -> the store.dispatch() function ourselves or 
        // BETTER-> the actionCreator provided by the .connect() from 'react-redux'; this is because the .connect() will wrap the actionCreator in a .dispatch() for us.
        // so when you do this 'this.props.selectSongActionCreator(song)' the .connect() will do : store.dispatch(this.props.selectSongActionCreator(song)); for you
        // If we decide to do the this.props.dispatch(ActionCreator(values)) ourselves, we can, but using 'react-redux' connect, we already did this and passed the instance as a prop in the index.js file.
        // when we update the State using our ActionCreator in the connect(), it will update all components hook up (using .connect()) to the 'react-redux' PROVIDER.
        return (
            <div className="ui divided list">
               {this._renderList()}
            </div>
        );
    }
}

//convention Name: We'll show the state/data as props
//state will contain the latest state from the STORE(all data)
//THIS FUNCTION GET'S CALLED EVERY TIME THE STATE IS UPDATED.
//THE state will be defined in the Reducers
const mapStateToProps = (state) => {
    //console.log(state);//{songs: Array(4), selectedSong: null} //INITIALLY, this will change if data is updated
    //ANYTHING WE RETURN HERE, Will be in the PROPs object we use in the component selected
    //in this case: connect(mapStateToProps)(SongList); -> SongList
    //return state;
    //Since we only need the 'songs' property here, we can extract it and only return that property:
    return {songs: state.songs};//now in SongList -> this.props === {songs: state.songs}
}

//react-redux connect() returns a function that we need to invoke passing a component
//it will return a React component. 
//-> we need to pass configuration to it. eg: mapStateToProps
//and optional: pass ActionCreators
const connectInstance = connect(mapStateToProps, {
    selectSongActionCreator: selectSongActionCreator
})(SongList);
export default connectInstance;