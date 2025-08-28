import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = "",
  onComplete = null 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      let index = 0;
      setDisplayText('');
      setIsCompleted(false);

      const typeTimer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(prev => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(typeTimer);
          setIsCompleted(true);
          if (onComplete) {
            onComplete();
          }
        }
      }, speed);

      return () => clearInterval(typeTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {!isCompleted && (
        <span className="animate-pulse text-yellow-600">|</span>
      )}
    </span>
  );
};

export default TypewriterText;