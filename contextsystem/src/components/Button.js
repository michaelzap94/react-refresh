import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  //this has to be called exactly 'contextType' just like 'state' has to be called 'state'
  static contextType = LanguageContext;

  renderSubmitText(language) {
    return language === 'english' ? 'Submit' : 'Enviar';
  }

  render() {
    return (
      <button className={`ui button primary`}>
        {this.renderSubmitText(this.context)}
      </button>
    );
  }
}

export default Button;