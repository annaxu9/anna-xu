import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './SwimmingFish.module.css'; // Import the CSS module

function SwimmingFish() {
  const [isFirstFishVisible, setIsFirstFishVisible] = useState(true);
  const [showBubble, setShowBubble] = useState(false); // New state for speech bubble visibility

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstFishVisible(prevState => !prevState);
    }, 15000); // 10 seconds interval

    return () => clearInterval(interval);
  }, []);

  // Function to handle fish click
  const handleFishClick = () => {
    setShowBubble(prev => !prev); // Toggle the visibility of the speech bubble
  };

  return (
    <div>
      {isFirstFishVisible && (
        <div className={styles.fishContainerRight} onClick={handleFishClick}>
          <Image src="/home-images/fish.png" alt="Swimming Fish Right" width={100} height={50} />
          {showBubble && (
            <>
              <div className={styles.speechBubble}>Just keep swimming!! You&apos;ve got it</div>
              <div className={styles.smallBubbleOneLeft}></div>
              <div className={styles.smallBubbleTwoLeft}></div>
            </>
          )}
        </div>
      )}
      {!isFirstFishVisible && (
        <div className={styles.fishContainerLeft} onClick={handleFishClick}>
          <Image src="/home-images/flipped-fish.png" alt="Swimming Fish Left" width={100} height={50} />
          {showBubble && (
            <>
              <div className={styles.speechBubble}>Just keep swimming!! You&apos;ve got it</div>
              <div className={styles.smallBubbleOneRight}></div>
              <div className={styles.smallBubbleTwoRight}></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SwimmingFish;
