import React from 'react';
import {connect} from 'react-redux';
import {createStreamAC} from '../../actions';

import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

  _onSubmit = formValues => {
    this.props.createStreamAC(formValues);
  };

  render(){
    //console.log(this.props);
    //NO redux-form: onSubmit={this._onSubmit}
    //with redux-form: onSubmit={this.props.handleSubmit(this._onSubmit)}//this.props.handleSubmit is provided by redux-form
    //SemanticUI will hide className='error' by default so we need to include 'error' in the form
    return (
      <div className="ui container">
          <h3>Create a Stream</h3>
          <StreamForm onSubmitCallback={this._onSubmit}/>
      </div>
    );
  }
}


const connectComponent = connect(null, {createStreamAC})(StreamCreate);
export default connectComponent;