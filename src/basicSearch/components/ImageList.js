import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

//FUNCTIONAL
const ImageList = (props) => {
  const imagesArrContainingImageCard = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{imagesArrContainingImageCard}</div>;
};

export default ImageList;