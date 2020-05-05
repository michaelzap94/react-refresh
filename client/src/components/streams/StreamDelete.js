import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import {fetchStreamAC, deleteStreamAC} from '../../actions';
//<Modal/>//will attempt to insert the modal html in Modal.js to the modal div in index.html
class StreamDelete extends React.Component{ 

  componentDidMount(){
    this.props.fetchStreamAC(this.props.match.params.id);
  }

  _renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
      <button className="ui button negative" onClick={()=>this.props.deleteStreamAC(id)}>Delete</button>
      <Link to="/" className="ui button"> Cancel </Link>
    </React.Fragment>
    );
  }

  _renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  }

  render(){
    return (
        <Modal title="Delete Stream" content={this._renderContent()} actions={this._renderActions()} onDismissCallback={()=>history.push('/')}/>
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
const connectComponent = connect(mapStateToProps, {fetchStreamAC, deleteStreamAC})(StreamDelete);

export default connectComponent;