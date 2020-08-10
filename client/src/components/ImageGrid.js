import React from 'react'

const ImageGrid = ({images}) => {
    return (
        <div className="container grid-container">
              {images && images.map((image) => <img key={image._id} src={image.url} alt='...' />)}
        </div>
    )
}

export default ImageGrid
