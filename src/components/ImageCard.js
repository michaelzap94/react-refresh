import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { spans: 0 };
    //create a ref so we can access the DOM properties
      this.imageRef = React.createRef();
    }
  
    componentDidMount() {
        //add a vanilla JS eventlistener. html img triggers 'load' when the img has finished loading
      this.imageRef.current.addEventListener('load', this._setSpans);
    }
  
    _setSpans = () => {

      const height = this.imageRef.current.clientHeight;//html img properties will be inside 'current'
      //calculate how many spans(number of cells) this image will need to occupy.
      const spans = Math.ceil(height / 10);//actual height of img / height of each cell we specified in CSS
      this.setState({ spans });
    };
  
    render() {
      const { description, urls } = this.props.image;
  
    //REMEMBER FROM CSS
    /* this image needs to be allocated 2 cells worth of space, next image will be shown in next cell */
    //grid-row-end: span 2; ===== {gridRowEnd: `span ${this.state.spans}`}
      return (
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <img ref={this.imageRef} alt={description} src={urls.regular} />
        </div>
      );
    }
  }
  
  
export default ImageCard;