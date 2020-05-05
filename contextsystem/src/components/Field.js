import React from 'react';

class Field extends React.Component {

  render() {
    const text = true ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;