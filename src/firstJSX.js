import React from 'react';
import ReactDOM from 'react-dom';
const labelText = 'Enter name:';
function getByLabelText(){
    return labelText;
}
//FUNCTIONAL component
const App = () => {
    const buttonText = { text: 'Click me' };
    return (
        <div>
            <label className="label" htmlFor="name">
                {getByLabelText()}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    );
}
//CLASS-BASED component
// class App extends React.Component{

// }

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);