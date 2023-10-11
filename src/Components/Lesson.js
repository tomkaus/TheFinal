import React from 'react';
import VideoCard from './VideoCard';

const videos = [
  {
    title: '5.1a Adding, Subtracting, Multiplying using FOIL',
    videoUrl: 'https://www.youtube.com/embed/Q7i13fxCt58',
  },
  {
    title: '5.1b Special Cases of Multiplying',
    videoUrl: 'https://www.youtube.com/embed/vccyWHm23ko',
  },
  {
    title: '5.1c Trinomial times a binomial',
    videoUrl: 'https://www.youtube.com/embed/FiktfctHjFk',
  },
  {
    title: '5.2a Division by a Monomial and Binomial',
    videoUrl: 'https://www.youtube.com/embed/NazjYm3N-SE',
  },
  {
    title: '5.2b Long Division',
    videoUrl: 'https://www.youtube.com/embed/9qoO6XSnByw',
  },
  {
    title: '5.3 Synthetic Division',
    videoUrl: 'https://www.youtube.com/embed/BjDFP2RLyw4',
  },
];

function Lesson() {
  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          videoUrl={video.videoUrl}
        />
      ))}
    </div>
  );
}

export default Lesson;
