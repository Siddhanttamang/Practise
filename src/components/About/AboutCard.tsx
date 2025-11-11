import React, { useEffect, useState } from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

const AboutCard = () => {
  const cards = [<Card1 />, <Card2 />, <Card3 />];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; 

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [isPaused, cards.length]);

  return (
    <div
      className="about-box1"
      onMouseEnter={() => setIsPaused(true)}   
      onMouseLeave={() => setIsPaused(false)}  
    >
      {cards[currentIndex]}
    </div>
  );
};

export default AboutCard;
