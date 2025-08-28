import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = "",
  onComplete = null,
  showCursor = true,
  multiline = false 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      let index = 0;
      setDisplayText('');
      setCurrentIndex(0);
      setIsCompleted(false);

      // تقسيم النص إلى أسطر مناسبة للعربية
      let processedText = text;
      if (multiline) {
        // تقسيم خاص للنص العربي
        if (text.includes('المنصة الرائدة في حلول الدفع الألكتروني في اليمن')) {
          processedText = 'المنصة الرائدة في حلول الدفع\nالألكتروني في اليمن';
        }
      }

      const typeTimer = setInterval(() => {
        if (index < processedText.length) {
          const char = processedText.charAt(index);
          if (char === '\n') {
            setDisplayText(prev => prev + '\n');
          } else {
            setDisplayText(prev => prev + char);
          }
          setCurrentIndex(index + 1);
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
  }, [text, speed, delay, onComplete, multiline]);

  return (
    <div className={className} style={{ 
      direction: 'rtl', 
      textAlign: 'right',
      width: '100%',
      position: 'relative'
    }}>
      <span style={{ 
        whiteSpace: 'pre-wrap', 
        lineHeight: '1.1',
        display: 'inline',
        position: 'relative'
      }}>
        {displayText.split('\n').map((line, lineIndex) => (
          <div key={lineIndex} style={{
            textAlign: 'right',
            width: '100%',
            position: 'relative'
          }}>
            {line}
            {/* عرض المؤشر فقط في السطر الأخير وإذا لم ينته التأثير */}
            {lineIndex === displayText.split('\n').length - 1 && 
             showCursor && 
             !isCompleted && (
              <span 
                className="inline-block w-1 bg-yellow-600" 
                style={{ 
                  height: '0.9em',
                  animation: 'blink 1s infinite',
                  verticalAlign: 'baseline',
                  marginLeft: '2px'
                }}>
              </span>
            )}
          </div>
        ))}
      </span>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TypewriterText;