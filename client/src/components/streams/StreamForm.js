import React from 'react';
// import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

// import {createStreamAC} from '../../actions';

class StreamForm extends React.Component {

  _renderError = (meta) => {
    const { error, touched } = meta;
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  _renderInput = (formProps) => {
    //This props are only for the Field Component.
    //the 'name' prop will be inside input, other labels passed in the Field component will be outside eg: label
    //formProps -->  {label:'', meta:{touched: false, valid: false, visited: true, error: "You must enter a title"}, input: { name: '', value:''}}
    
    //OPTIONAL class to make the field red and inlcude erro message
    const classNameWithError = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
    return (
      <div className={classNameWithError}>
        <label>{formProps.label}</label>
        {/*OLD AND LONG <input onChange={formProps.input.onChange} value={formProps.input.value} autoComplete="off" /> */}
        <input {...formProps.input} autoComplete="off"/>
        {this._renderError(formProps.meta)}
      </div>
    );
  };

//   _onSubmit = (formValues) => {
//     // event does not exist in redux-form as they'll handle it for us, it will pass form values
//     // event.proventDefault();// no need as redux-form will handle this
//     //console.log(formValues);//{title: "fsdfdf", description: "fdsfsd"}
//     this.props.createStreamAC(formValues);//call the ActionCreator createStream to make the api request
//   }

  _onSubmitCallbackRefactored = (formValues) => {
    //this.props.createStreamAC(formValues);//call the ActionCreator createStream to make the api request
    this.props.onSubmitCallback(formValues);//pass the formValues to the parent component's callback
  }


  render(){
    //console.log(this.props);
    //NO redux-form: onSubmit={this._onSubmit}
    //with redux-form: onSubmit={this.props.handleSubmit(this._onSubmit)}//this.props.handleSubmit is provided by redux-form
    //SemanticUI will hide className='error' by default so we need to include 'error' in the form
    return (
      <div className="ui container">
          <form className="ui form error" onSubmit={this.props.handleSubmit(this._onSubmitCallbackRefactored)}>
            <Field name='title' label="Enter Title" component={this._renderInput}/>
            <Field name='description' label="Enter Description" component={this._renderInput}/>
            <button className="ui button primary">Submit</button>
          </form>
      </div>
    );
  }
}

//validate function to be passed in to the reduxFormConnect
//the key has to be 'validate'
//if there's any error in this form, it will pass the error object to the component={FUNCTION} of the Field with the same name as the error key:
//eg: formValues.title -> will pass the error to <Field name='title' component={this._renderInput}/>, 
//so the error can be fetched from the this._renderInput(formProps) function-> using formProps.meta.error
//this function will RUN ALL THE TIME, and will prevent the form submission(keyenter or submit click) till no errors
const _validate = formValues => {
  // it will pass form values so we can validate it
  //console.log(formValues);//{title: "fsdfdf", description: "fdsfsd"}

  const errors = {};//if empty then no errors

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};
//ActionCreator will be created and handled by reduxForm
//it requires a key 'form' with any string value
const reduxFormConnect = reduxForm({
  form: 'streamForm',
  validate: _validate
})(StreamForm);

//we'll not need this here
// const connectComponent = connect(null, {createStreamAC})(reduxFormConnect);
//export default connectComponent;
export default reduxFormConnect;