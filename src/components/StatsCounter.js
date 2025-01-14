import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set up IntersectionObserver when the component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility to true when the component is in view
          }
        });
      },
      { threshold: 0.5 } // 50% of the component needs to be visible
    );

    const element = document.querySelector('.stats-container');
    if (element) {
      observer.observe(element); // Observe the target element
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div className="stats-container">
      {isVisible && (
        <>
          <div
            style={{
              color: '#FF5F82',
              fontSize: '1.4rem',
              fontWeight: 'bold',
            }}
          >
            <CountUp end={20} duration={2} />+
            <span
              style={{
                color: '#edf0f1c9',
                fontSize: '1.4rem',
                fontWeight: 'unset',
              }}
            >
              {' '}
              Projects
            </span>
          </div>
          <div
            style={{
              color: '#E268F3',
              fontSize: '1.4rem',
              fontWeight: 'bold',
            }}
          >
            <CountUp end={90} duration={2} />+
            <span
              style={{
                color: '#edf0f1c9',
                fontSize: '1.4rem',
                fontWeight: 'unset',
              }}
            >
              {' '}
              Contributions
            </span>
          </div>
          <div
            style={{
              color: '#6F82FF',
              fontSize: '1.4rem',
              fontWeight: 'bold',
            }}
          >
            <CountUp end={1000} duration={2} />+
            <span
              style={{
                color: '#edf0f1c9',
                fontSize: '1.4rem',
                fontWeight: 'unset',
              }}
            >
              {' '}
              Followers
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default StatsCounter;
