import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchStreamAC, editStreamAC} from '../../actions';
import StreamForm from './StreamForm';
class StreamEdit extends React.Component {
  componentDidMount() {
    //this will make sure we fetch, this stream AT LEAST once everytime we visit this page component.
    this.props.fetchStreamAC(this.props.match.params.id);
  }

  _onSubmit = formValues => {
    this.props.editStreamAC(this.props.match.params.id, formValues);
  };

  render() {
    //initially this may be null, if no streams are availabe. eg: if we hit the url directly, without having gone through the streams/list page first or we refresh the page
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
        <div className="ui container">
          <h3>Edit a Stream</h3>
          {/* NO LODASH <StreamForm onSubmitCallback={this._onSubmit} initialValues={{title: this.props.stream.title, description: this.props.stream.description}}/> */}
          <StreamForm onSubmitCallback={this._onSubmit} initialValues={_.pick(this.props.stream, 'title', 'description')}/>
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

const connectComponent = connect(mapStateToProps, {fetchStreamAC, editStreamAC})(StreamEdit);

export default connectComponent;