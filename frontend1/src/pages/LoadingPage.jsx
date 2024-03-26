import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web';

const LoadingPage = () => {
  const container = useRef(null);

  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./loading.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);

  // Style for the container element
  const containerStyle = {
    width: "100px", // Adjust the width as needed
    height: "100px" // Adjust the height as needed
  };

  return (
    <div style={containerStyle}>
      <div ref={container} className="absolute inset-0"></div>
    </div>
  );
};

export default LoadingPage;
