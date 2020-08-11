import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className='img-grid'>
      {images &&
        images.map((image) => (
          <div className='img-wrap'>
            <img key={image._id} src={image.url} alt='...' />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
