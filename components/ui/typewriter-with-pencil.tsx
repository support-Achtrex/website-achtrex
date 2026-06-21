"use client";

import React, { useState, useEffect } from 'react';

export const TypewriterWithPencil = ({ text, className, speed = 40, delay = 0, onComplete, pencilSize = 32, asBlock = false, active = false }: any) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (active) {
      setDisplayedText('');
      setIsTyping(true);
      setHasStarted(false);
      
      const delayTimeout = setTimeout(() => {
        setHasStarted(true);
        let i = 0;
        const interval = setInterval(() => {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          if (i >= text.length) {
            clearInterval(interval);
            setIsTyping(false);
            if (onComplete) onComplete();
          }
        }, speed);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(delayTimeout);
    } else {
      setDisplayedText('');
      setIsTyping(false);
      setHasStarted(false);
    }
  }, [active, text, speed, delay]);

  if (asBlock) {
    const lines = displayedText.split('\n');
    return (
      <span className={className}>
        {lines.map((line: string, idx: number) => (
          <span key={idx} className="block whitespace-pre-wrap">
            {line}
            {idx === lines.length - 1 && isTyping && hasStarted && (
              <span className="inline-block ml-2 align-baseline relative top-1">
                <img src="/images/typing-car-user.png" alt="Typing Truck" style={{ width: pencilSize * 2.5, height: 'auto', transform: 'translateY(-2px)' }} className="drop-shadow-2xl" />
              </span>
            )}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {displayedText}
      {isTyping && hasStarted && (
        <span className="inline-block ml-2 align-baseline relative top-1">
          <img src="/images/typing-car-user.png" alt="Typing Truck" style={{ width: pencilSize * 2.5, height: 'auto', transform: 'translateY(-2px)' }} className="drop-shadow-2xl" />
        </span>
      )}
    </span>
  );
};
