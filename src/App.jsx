import React, { useState, useEffect } from 'react';
import axios from 'axios';

import VideoPlayer from './Videoplayer';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    axios.get('/api/videos')
      .then(res => setVideos(res.data))
      .catch(err => console.error(err));
  }, []);

  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px'
  };

  const videoListStyle = {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#e0e0e0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#d0d0d0'
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Video Streamer</h1>
      <div style={videoListStyle}>
        <h2 style={{ marginTop: 0, color: '#666' }}>Available Videos:</h2>
        <ul style={listStyle}>
          {videos.map(video => (
            <li key={video}>
              <button 
                style={buttonStyle}
                onClick={() => setSelectedVideo(video)}
              >
                {video}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedVideo && <VideoPlayer video={selectedVideo} />}
    </div>
  );
}

export default App;