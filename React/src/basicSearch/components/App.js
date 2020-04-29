import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = {images: []}

    // AXIOS using promises
    // //this function will be called inside the Child component and it will pass a value we can access from here.
    // _onSearchSubmitCallback(term){
    //     console.log(term);
    //     //axios returns a promise
    //     const axiosPromise = axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: term},
    //         headers: {
    //             Authorization:
    //               'Client-ID BT2gTpF8g3IUrh7184gAOwb30W8B0yfZ9L2BC2hG4Jo'
    //           }
    //     });

    //     axiosPromise
    //     .then((response) => {
    //         console.log('length:', response.data.results.length);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }

    //AXIOS using async/await
    _onSearchSubmitCallback = async (term) => {
        console.log(term);
        try {
            //axios returns a promise so using await we can extract the result/error
            const axiosPromiseResponse = await unsplash.get('/search/photos', {
                params: {query: term}
            });
      
            // console.log('length:', axiosPromiseResponse.data.results.length);
            this.setState({images: axiosPromiseResponse.data.results});
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: 10}}>
                <SearchBar _onSubmit={this._onSearchSubmitCallback} />
                <ImageList images = {this.state.images}/>
            </div>
        );
    }
}

export default App;

