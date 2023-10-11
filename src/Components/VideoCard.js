import React from 'react';
import './Video.css'; // Import the CSS file for styling

function VideoCard({ title, videoUrl }) {
  return (
    <div className="video-card">
      {/* Video card content */}
      <h2>{title}</h2>
      <div className="video-preview">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <iframe
            width="280"  // Adjust the width as needed
            height="158" // Adjust the height as needed
            src={videoUrl}
            frameborder="0"
            allowFullScreen
            title={title}
          ></iframe>
        </a>
      </div>
    </div>
  );
}

export default VideoCard;
