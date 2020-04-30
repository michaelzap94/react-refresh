import { combineReducers } from 'redux';

//static list so no need to do anything here:
//we will never update the songs list in this basic app
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' }
    ];
};
//We'll update the SONG_SELECTED so we need to modify the data/state here:
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    } else {
        return selectedSong;
    }
};

//The keys in this object, will be the keys in the STATE object in the STORE.
const _combinedReducers = combineReducers({
                                            songs: songsReducer,
                                            selectedSong: selectedSongReducer
                                        });

export default _combinedReducers;