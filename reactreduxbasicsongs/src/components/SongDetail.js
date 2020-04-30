//this component will not change the state, it just needs to read the listen for any changes to the state.
import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
        //console.log(this.props);if NO Action Creator is passed in .connect()//{songs: Array(4), dispatch: ƒ}
        //console.log(this.props);if an Action Creator is passed in .connect()//{songs: Array(4), selectSongActionCreator: ƒ ()}
        // We can use either -> the store.dispatch() function ourselves or 
        // BETTER-> the actionCreator provided by the .connect() from 'react-redux'; this is because the .connect() will wrap the actionCreator in a .dispatch() for us.
        // so when you do this 'this.props.selectSongActionCreator(song)' the .connect() will do : store.dispatch(this.props.selectSongActionCreator(song)); for you
        // If we decide to do the this.props.dispatch(ActionCreator(values)) ourselves, we can, but using 'react-redux' connect, we already did this and passed the instance as a prop in the index.js file.
        // when we update the State using our ActionCreator in the connect(), it will update all components hook up (using .connect()) to the 'react-redux' PROVIDER.
        const {song} = props;
        //first time SongDetail is hooked up, props.song will be null
        if(!song) {
            return <div>Select song</div>
        }
        return (
            <div className="ui container">
                <h3> Details for:  </h3>
                <p>
                    Title: {song.title}
                    <br/>
                    Duration: {song.duration}
                </p>
               
            </div>
        );
}

//convention Name: We'll show the state/data as props
//state will contain the latest state from the STORE(all data)
//THIS FUNCTION GET'S CALLED EVERY TIME THE STATE IS UPDATED.
//THE state will be defined in the Reducers
const mapStateToProps = (state) => {
    return {song: state.selectedSong};//now in SongDetail -> props === {song: state.selectedSong}
}

//react-redux connect() returns a function that we need to invoke passing a component
//it will return a React component. 
//-> we need to pass configuration to it. eg: mapStateToProps
//In this case we don't need to pass an ActionCreator since we are not going to change the state - just read it.
const connectInstance = connect(mapStateToProps)(SongDetail);

export default connectInstance;