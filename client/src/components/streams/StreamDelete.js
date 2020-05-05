import React from 'react';
import Modal from '../Modal';

import history from '../../history';
//<Modal/>//will attempt to insert the modal html in Modal.js to the modal div in index.html
const StreamDelete = (props) => {

  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );



    return (
      <div className="ui container">
          StreamDelete
          <Modal title={"some"} content={"some"} actions={actions} onDismissCallback={()=>history.push('/')}/>
      </div>
    );
  }

export default StreamDelete;