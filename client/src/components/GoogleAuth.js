import React from 'react';
import {connect} from 'react-redux';
import {signInAC, signOutAC} from '../actions'

//using redux to know if user is signed in or not in other components
//so we need to extract the isSignedIn boolean, put it in the state and then move it back to this component
//ONLY ActionCreators will be able to change the Auth state
class GoogleAuth extends React.Component {
    //BEGIN: REACT ONLY no REDUX=====================================
    //state = {_isSignedIn: null};//at the start we don't know if the user is signed in or not
    //END: REACT ONLY no REDUX=====================================

    componentDidMount() {
        //window is to make sure that we are accessing the googleapi(gapi) services available in the window scope
        //as we imported the google api library in the index.html as a script
        window.gapi.load('client:auth2', () => {//load google api library
            window.gapi.client.init({//this will only initialize the library
                clientId: process.env.REACT_APP_GOOGLE_API_CLIENTID,
                scope: 'email'
            }).then(() => {//once library has been initialized, we can initiate the oAuth flow
                //get reference to the AuthInstance and store it in the this.auth variable
                this.auth = window.gapi.auth2.getAuthInstance();

                //BEGIN: REACT ONLY no REDUX=====================================
                //as soon as the component ends rendering, get the initial isSignedIn property
                // this.onAuthChange();//just set the initial state to the value of this.auth.isSignedIn.get();
                // //we can pass a callback to the gapi isSignedIn.listen() method
                // //this callback will get called once the isSignedIn property changes-> true or false
                // //after either this.auth.signIn() or .signOut()
                // this.auth.isSignedIn.listen(this.onAuthChange);
                //END: REACT ONLY no REDUX=====================================

                //as soon as the component ends rendering, get the initial isSignedIn property and update the STATE in our STORE
                this._onAuthChange(this.auth.isSignedIn.get());//just set the initial state to the value of this.auth.isSignedIn.get();
                //we can pass a callback to the gapi isSignedIn.listen() method
                //this callback will get called once the isSignedIn property changes-> true or false
                //after either this.auth.signIn() or .signOut()
                this.auth.isSignedIn.listen(this._onAuthChange);//the callback will receive isSignedIn boolean as an argument(built-in)
                //THIS FUNCTION WILL SIT AND WAIT FOR SOME CHANGE, so it can trigger the callback
              });
        });
    }

    _onAuthChange = (isSignedIn) => {
        //call our actioncreator, so it updates the STATE of our flag in the STORE
        if (isSignedIn) {
            //get GOOGLE userId so we can identify this user's actions later
            const userId = this.auth.currentUser.get().getId();
            //CALL the ActionCreator function that will get dispatched by .connect() to change the isSignedIn flag by the reducer
            this.props.signInAC(userId);
        } else {
            //CALL the ActionCreator function that will get dispatched by .connect() to change the isSignedIn flag by the reducer
            this.props.signOutAC();
        }
    }

    _onSignInClick = () => {
        //show sign in popup
        this.auth.signIn();
      };
    
    _onSignOutClick = () => {
        //sign user out
        this.auth.signOut();
    };

    //BEGIN: REACT ONLY no REDUX=====================================
    // onAuthChange = () => {
    //     this.setState({_isSignedIn: this.auth.isSignedIn.get()});
    // }
    // renderAuthButton() {
    //     if (this.state._isSignedIn === null) {
    //         return null;//<div>I don't know if you are signed in</div>;
    //     } else if (this.state._isSignedIn) {
    //         return (
    //         <button onClick={this._onSignOutClick} className="ui red google button">
    //             <i className="google icon" />
    //             Sign Out
    //         </button>
    //         );
    //     } else {
    //         return (
    //         <button onClick={this._onSignInClick} className="ui red google button">
    //             <i className="google icon" />
    //             Sign In with Google
    //         </button>
    //         );
    //     }
    //     }
    //END: REACT ONLY no REDUX=====================================

    _renderAuthButton() {
    if (this.props._isSignedIn === null) {
        return null;
    } else if (this.props._isSignedIn) {
        return (
        <button onClick={this._onSignOutClick} className="ui red google button">
            <i className="google icon" />
            Sign Out
        </button>
        );
    } else {
        return (
        <button onClick={this._onSignInClick} className="ui red google button">
            <i className="google icon" />
            Sign In with Google
        </button>
        );
    }
    }

    render(){
        return (
            <div className="">
                {this._renderAuthButton()}
            </div>
          );
    }
}

const mapStateToProps = (state, ownProps) => {
    const _isSignedIn = state.authReducer.isSignedIn;
    return {_isSignedIn};
}

const connectInstance = connect(mapStateToProps, {signInAC, signOutAC})(GoogleAuth);
export default connectInstance;