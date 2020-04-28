//We need 2 components (App(determine location+month weather)) -> pass it -> (SeasonDisplay(shows icons and text based on props))
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import SeasonDisplay from './SeasonDisplay';


//FUNCTIONAL component - NO ASYNC, WHERE we need to wait for a result/data.
// const App = () => {
//     //build-in the browser/ NORMAL JS
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     //execute function

//     return  (
//         <div>hi</div>  
//       );
// }

//CLASS component - can manage STATE
class App extends React.Component {

    constructor(props){
        super(props);//WE HAVE TO CALL IT
        //WE HAVE TO INITIALIZE THE STATE
        this.state = {lat: null};

        //build-in the browser/ NORMAL JS
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //setState({k:v}) -> ALWAYS: needs to be called to update the state.
                //NEVER DO: this.state.lat = position.coords.latitude VERY BAD PRACTICE
                this.setState({lat:position.coords.latitude})
            },
            (err) => console.log(err)
        );
    }

    //execute function
    render(){
        // don't execute functions like this in render as RENDER will be called all the time
        // //build-in the browser/ NORMAL JS
        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => console.log(position),
        //     (err) => console.log(err)
        // );

        //WE NEED TO RETURN html
        return  (
        <div>Latitude: {this.state.lat}</div>  
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);