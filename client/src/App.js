import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import axios from 'axios';

function App() {
  const [images, setImages] = useState(null);

  const getImages = async () => {
    try {
      const i = await axios.get('/api/images');
      setImages(i.data);
    } catch (error) {
      console.log(error);
    }
  };

  getImages();

  return (
    <div className='App'>
      <div className='title'>
        <h1>Dogram</h1>
        <h2>Your photos</h2>
        <p>Most adorable dogs online</p>
      </div>

      <UploadForm images={images} setImages={setImages} />

      <ImageGrid images={images} />
    </div>
  );
}

export default App;
