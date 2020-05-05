import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import history from '../../history';
import {fetchStreamAC} from '../../actions';
class StreamShow extends React.Component {

  componentDidMount(){
    this.props.fetchStreamAC(this.props.match.params.id);
  }

  render(){
    console.log(this.props.stream);

    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div className="ui container">
        {/* <video ref={this.videoRef} style={{ width: '100%' }} controls /> */}
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  } 
}

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);//{history: {…}, location: {…}, match: {…}, staticContext: undefined}
  const streamId = ownProps.match.params.id;
  //doing the following alone will not work as it will only return the list of all streams if we come from the streams/list, as at that point, the list of streams will be saved,
  //however, we might as well just wanted to hit the url and still see the edit page. if we do this without having gone through the streams/list page first, then listOfStreamsObjects will be [] INITIALLY;
  const listOfStreamsObjects = state.streamsReducer;//this will return an array of object containing the list of all streams
  //THEREFORE: we need to make sure we initialize, the state array at least with the element we want to modify by calling  fetchStream at some point in componentDidMound() using this.props.match.params.id
  const stream = listOfStreamsObjects[streamId];
  return {stream};

}
const connectComponent = connect(mapStateToProps, {fetchStreamAC})(StreamShow);
export default connectComponent;