//it's called index.js for convention, as we'll import it from another file
//it's shorter to do: import actions from '../actions' [THAN] import actions from '../actions/index'
//We'll use our action creator here.
export const selectSongActionCreator = (song) => {
    //return ACTION
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

