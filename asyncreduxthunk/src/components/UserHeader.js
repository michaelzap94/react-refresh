import React from 'react';
import { connect } from 'react-redux';
// import {fetchUser} from '../actions';//fetchPostsAndUsers Action Creator will handle this

class UserHeader extends React.Component {
    // remove it so it does not attemp to fetch its own data as this is handled by the fetchPostsAndUsers Action Creator
    // componentDidMount(){
    //     this.props.fetchUser(this.props._userId);
    // }

  render() {
    const { user } = this.props;//EXTRACT user from this.props
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

//mapStateToProps -> will take 2 arguments: STATE AND THE PROPS PASSED IN TO THIS COMPONENT BY A PARENT COMPONENT
//it's better to handle the LOGIC here. eg: extracting an element from an array inside props here and just pass ONE element to the component if it's supposed to be singular.
const mapStateToProps = (state, ownProps) => {
    const userFound = state.usersReducer.find((oneUser)=>oneUser.id === ownProps._userId);;
    return {user: userFound};
}

export default connect(mapStateToProps)(UserHeader);
