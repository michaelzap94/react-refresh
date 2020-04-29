import React from 'react';
import VideoItem from './VideoItem';

//destructure-> the props object props: { videos, onVideoSelect }
const VideoList = ({ videos, _onVideoSelect }) => {
    const renderedList = videos.map((oneVideo) => {
        return <VideoItem key={oneVideo.id.videoId} video={oneVideo} __onVideoSelect={_onVideoSelect} />;
    });
  
    return (<div className="ui relaxed divided list">{renderedList}</div>);
  };
  
  export default VideoList;