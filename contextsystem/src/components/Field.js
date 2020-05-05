import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    //this has to be called exactly 'contextType' just like 'state' has to be called 'state'
    static contextType = LanguageContext;

    render() {
        console.log(this.context);
        const text = this.context === 'english' ? 'Name' : 'Nombre';

        return (
            <div className="ui field">
            <label>{text}</label>
            <input />
            </div>
        );
    }
}

//OR HERE: Field.contextType = LanguageContext;


export default Field;