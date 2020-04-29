import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

class App extends React.Component{
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this._onSearchSubmitCallback('default search');
    }

    _onSearchSubmitCallback = async (term) => {
        try {
            //part: snippet -> sends us description about title, description, link, author etc
            const response = await youtube.get("/search", {
                params: {
                  q: term,
                  part: "snippet",
                  maxResults: 5,
                  type: 'video',//so we only search for videos and avoid: Warning: Each child in a list should have a unique "key" prop 
                  key: 'AIzaSyDNCW4m_iFSUzm4pbhXkuzdm42Ke9K50Hw'
                }
              });

            this.setState({
                videos: response.data.items, 
                selectedVideo: response.data.items[0]
            });
        } catch (error) {
            console.log(error);
        }
    }

    _onSelectedVideoCallback = (videoSelected) => {
        console.log(videoSelected);
        this.setState({selectedVideo: videoSelected})
    }


    render(){


        return (
            <div className="ui container">
                <SearchBar _onSubmit={this._onSearchSubmitCallback}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} _onVideoSelect={this._onSelectedVideoCallback}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;