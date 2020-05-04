import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {fetchAllStreamsAC} from '../../actions';

class StreamList extends React.Component {

  componentDidMount(){//fetch the list of streams once
    this.props.fetchAllStreamsAC();
  }

  _renderAdmin(stream) {
    if(stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  _renderList() {
    const arrOfJSX = this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this._renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
    return arrOfJSX;
  }

  _renderCreate() {
    if(this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render(){
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this._renderList()}
        </div>
        {this._renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const listOfStreamsObjects = state.streamsReducer;//this will return an array of object containing the list of all streams
  //console.log(listOfStreamsObjects);//{1: {title: "My Stream", description: "This is a great stream.", id: 1}, 2: {title: "Other Stream", description: "Here's some stream", id: 2}}
  return {
    streams: Object.values(listOfStreamsObjects),
    currentUserId: state.authReducer.userId,
    isSignedIn: state.authReducer.isSignedIn
  };
}

const connectComponent = connect(mapStateToProps, {fetchAllStreamsAC})(StreamList);

export default connectComponent;