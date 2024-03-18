import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=30');
        setPhotos(response.data);
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoList;
