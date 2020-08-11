import React, { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';
import axios from 'axios';

const UploadForm = ({ images, setImages }) => {
  const [file, setFile] = useState(null);
  // const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [selected, setSelected] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const onChange = (e) => {
    setSelected(e.target.files[0]);
    console.log(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let selected = e.target.files[0];
    console.log('does it run?');
    console.log(selected);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      console.log(selected);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    console.log(file);
    if (file) {
      const storageRef = projectStorage.ref(file.name);

      storageRef.put(file).on(
        'state_changed',
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          // setProgress(percentage);
          console.log(percentage);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          const res = await axios.post('/api/images/add', { url });
          setUrl(res.data.url);
          if (images) {
            setImages([...images, res.data]);
          } else {
            setImages([res.data]);
          }
          console.log(res.data);
        }
      );
    }
    //eslint-disable-next-line
  }, [file]);

  return (
    <div>
      <form className='container' onSubmit={handleSubmit}>
        <label>
          <input type='file' onChange={onChange} />
          <span>+</span>
        </label>
        <button>SUBMIT!</button>
      </form>
    </div>
  );
};

export default UploadForm;
