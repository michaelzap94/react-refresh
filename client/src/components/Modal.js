//PORTALS
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        //this is the outter window dim on the background
        <div onClick={props.onDismissCallback} className="ui dimmer modals visible active">
            {/* this is the INNER window, basically the modal, you need to stop the onDismiss propagation added to the parent background above */}
            <div
                onClick={e => e.stopPropagation()}
                className="ui standard modal visible active"
            >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;