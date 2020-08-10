import React,{useState} from 'react';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import axios from 'axios'

function App() {

  const [images, setImages] = useState(null);

  const getImages=async()=> {
    const i = await axios.get('/api/images');
    setImages(i.data)
  }

  getImages();

  return (
    <div className='App'>
      <h1>HELLO</h1>
      <UploadForm images={images} setImages={setImages}/>
    
      <ImageGrid images={images}/>
    </div>
  );
}

export default App;
