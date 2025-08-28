import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = "",
  onComplete = null,
  showCursor = true 
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
      {showCursor && !isCompleted && (
        <span className="inline-block w-1 h-[0.9em] bg-yellow-600 ml-1 animate-pulse" 
              style={{ animation: 'blink 1s infinite' }}>
        </span>
      )}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TypewriterText;