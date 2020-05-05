import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

//CONSUMER APPROACH
class Button extends React.Component {
  //this has to be called exactly 'contextType' just like 'state' has to be called 'state'
  // static contextType = LanguageContext;

  renderSubmitText(language) {
    return language === 'english' ? 'Submit' : 'Enviar';
  }

  renderButton(valueColor){
    return (
      <button className={`ui button ${valueColor}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmitText(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(valueColor) => this.renderButton(valueColor) }
      </ColorContext.Consumer>
    );
  }
}

export default Button;