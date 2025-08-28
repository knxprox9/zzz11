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
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      let index = 0;
      setDisplayText('');
      setIsCompleted(false);

      // تقسيم النص إلى أسطر مناسبة للعربية
      let processedText = text;
      if (multiline) {
        // تقسيم خاص للنص العربي
        if (text.includes('المنصة الرائدة في حلول الدفع الألكتروني في اليمن')) {
          processedText = 'المنصة الرائدة في حلول الدفع\nالألكتروني في اليمن';
        } else {
          // تقسيم النص عام بناء على الطول المناسب
          const words = text.split(' ');
          const lines = [];
          let currentLine = '';
          const maxWordsPerLine = 5; // تقريباً 5 كلمات لكل سطر للعربية
          
          for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const lineWords = currentLine.split(' ').filter(w => w.length > 0);
            
            if (lineWords.length >= maxWordsPerLine && currentLine.length > 0) {
              lines.push(currentLine.trim());
              currentLine = word;
            } else {
              currentLine += (currentLine ? ' ' : '') + word;
            }
          }
          
          if (currentLine.trim()) {
            lines.push(currentLine.trim());
          }
          
          processedText = lines.join('\n');
        }
      }

      const typeTimer = setInterval(() => {
        if (index < processedText.length) {
          const char = processedText.charAt(index);
          if (char === '\n') {
            setDisplayText(prev => prev + '<br>');
          } else {
            setDisplayText(prev => prev + char);
          }
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
    <span className={className}>
      <span 
        dangerouslySetInnerHTML={{ __html: displayText }}
        style={{ 
          whiteSpace: 'pre-wrap', 
          lineHeight: '1.1',
          display: 'block',
          textAlign: 'center'
        }}
      />
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