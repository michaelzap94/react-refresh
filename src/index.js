//We need 2 components (App(determine location+month weather)) -> pass it -> (SeasonDisplay(shows icons and text based on props))
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


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

    // constructor(props){
    //     super(props);//WE HAVE TO CALL IT
    //     //WE HAVE TO INITIALIZE THE STATE
    //     //ONE WAY TO INIT STATE:
    //     //this.state = {lat: null};
    // }
    //ALTERNATE WAY TO INIT STATE:
    state = {lat: null}

    mRenderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <SeasonDisplay errorMessage={this.state.errorMessage}/>
            //return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            //here, you're passing a state as a prop to a child component
            return <SeasonDisplay lat={this.state.lat}/>
            //return <div>Latitude: {this.state.lat}</div>
        }

        return <Spinner message = "Please accept location permission"/>
        // return <div>Loading...</div>
    }

    //execute function
    render(){
        // don't execute functions like this in render as RENDER will be called all the time
        // //build-in the browser/ NORMAL JS
        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => console.log(position),
        //     (err) => console.log(err)
        // );

        //IN THE RENDER WE ONLY WANT ONE return statement, therefore, move your logic out of it.
        return (
        <div className="border red">{this.mRenderContent()}</div>
        );

        //WE NEED TO RETURN html
    }

    //IT'S recommended to do DATA LOADING HERE:
    componentDidMount(){
        //build-in the browser/ NORMAL JS
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //setState({k:v}) -> ALWAYS: needs to be called to update the state.
                //NEVER DO: this.state.lat = position.coords.latitude VERY BAD PRACTICE
                this.setState({lat:position.coords.latitude})
            },
            (err) => {
                //setState({k:v}) -> will create a new property in the state if it doesn't exist.
                this.setState({errorMessage: "Sorry latitude could not be retrieved."});
            }
        );
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);