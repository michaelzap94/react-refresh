import React from 'react';
import {connect} from 'react-redux';

import {fetchPosts} from '../actions';
//call an ActionCreator in the 'componentDidMount' component
//it will run code to make an API request and return the response as an Action(using Redux-Thunk)
//later, some Reducer will receive the Action and will process it, changing the State
//that will make every component listening/attached to rerender the state. Using .connect();
class PostList extends React.Component {
    componentDidMount(){
        //ActionCreator passed in by the .connect().
        //it will return an Action that will be handled by some reducer, that will update the state.
        //the internal .dispatch() function in .connect() will be responsible for handing it to the reducers registered in the index.js
        this.props.fetchPosts();
    }

    render(){
        return (
            <div className="">
                PostList
            </div>
          );
    }
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
const connectInstance = connect(null, {fetchPosts:fetchPosts})(PostList);
export default connectInstance;