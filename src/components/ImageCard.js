import React from 'react';

const ImageCard = (props) => {
    //props = {key:'', image:''}
  
    return <img src={props.image.urls.regular} alt={props.image.description}/>;
  };
  
export default ImageCard;