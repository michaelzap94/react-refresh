import React from 'react';
import ReactDOM from 'react-dom';
//faker is a 3th party library that will generate random data
import faker from 'faker';

//FUNCTIONAL component
const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="avatar">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today</span>
                    </div>
                    <div className="text">Nice blog post</div>
                </div>
            </div> 
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);