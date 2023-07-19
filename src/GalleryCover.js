import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGrid from './Component/PhotoGallery';
import { Link } from 'react-router-dom';

const GalleryCover = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch data from the API
      axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
          console.log("this is api all :: ", response);
          setPhotos(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);
  
    return (
      <div>
        <div className='navigation-wrapper'>
          <div className='navigation-div'>
            <Link key="main" to="/" style={{ textDecoration: 'none', padding: '0.5rem', margin: '0 0.5rem', color: 'blue', borderRadius: '4px', background: 'lightgray' }}>Todo</Link>
            <Link key="gallery" to="/gallery" style={{ textDecoration: 'none', padding: '0.5rem', margin: '0 0.5rem', color: 'blue', borderRadius: '4px', background: 'lightgray' }}>Gallery</Link>
            <Link key="system" to="/system" style={{ textDecoration: 'none', padding: '0.5rem', margin: '0 0.5rem', color: 'blue', borderRadius: '4px', background: 'lightgray' }}>System Details</Link>
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ImageGrid images={photos} />
          </div>
        )}
      </div>
    );
};

export default GalleryCover;
