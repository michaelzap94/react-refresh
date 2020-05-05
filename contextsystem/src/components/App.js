
import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// import { LanguageStore } from '../contexts/LanguageContext';
// import LanguageSelector from './LanguageSelector';



class App extends React.Component {

    state = {language: 'english'};

    onLanguageChange = (language) => {
        this.setState({language});
    }

    render() {
        return (
            <div className="ui container">
                <div>
                Select a language:
                <i
                    className="flag us"
                    onClick={() => this.onLanguageChange('english')}
                />
                <i
                    className="flag es"
                    onClick={() => this.onLanguageChange('spanish')}
                />
                </div>
                <ColorContext.Provider value="red">
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate/>
                </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;