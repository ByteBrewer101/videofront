

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ video }) => {
  return (
    <div>
      <h2>Now Playing: {video}</h2>
      <video 
        controls 
        autoPlay 
        key={video}
        style={{ width: '100%', maxWidth: '800px' }}
      >
        <source 
          src={`/api/video/${video}`} 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;