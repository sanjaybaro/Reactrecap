import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <div style={{ width: '200px', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
      <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
      <div style={{ padding: '10px' }}>
        <h3 style={{ margin: '0', fontSize: '16px' }}>{photo.title}</h3>
        <p style={{ color: '#888', fontSize: '14px' }}>Album ID: {photo.albumId}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
