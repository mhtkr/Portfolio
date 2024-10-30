import React, { useEffect } from 'react';
import achievements from '../Api/achievements.json'

const Achieve = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='ach-main'>
      {achievements.map((bid, index) => (
        <div key={index} className='achievement'>
          <h3>{bid.title || 'Prompt Design in Vertex AI'}</h3>
          <div className='badge'>
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id={bid.badge_id}
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achieve;
