import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./SwimmingFish.module.css"; // Import CSS module

function SwimmingFish() {
  const [isSwimmingRight, setIsSwimmingRight] = useState(true);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwimmingRight((prev) => !prev);
    }, 15000); // 15 seconds per direction

    return () => clearInterval(interval);
  }, []);

  // Debounced fish click to prevent rapid toggling
  const handleFishClick = useCallback(() => {
    setShowBubble((prev) => !prev);
  }, []);

  return (
    <div className={styles.aquarium}>
      <div
        className={`${styles.fishContainer} ${
          isSwimmingRight ? styles.swimRight : styles.swimLeft
        }`}
        onClick={handleFishClick}
      >
        <Image
          src={
            isSwimmingRight
              ? "/home-images/fish.png"
              : "/home-images/flipped-fish.png"
          }
          alt="Swimming Fish"
          width={100}
          height={50}
          priority // Preload image to reduce flicker
        />
        {showBubble && (
          <div className={styles.speechContainer}>
            <div className={styles.speechBubble}>
              Just keep swimming!! You&apos;ve got it
            </div>
            <div
              className={
                isSwimmingRight
                  ? styles.smallBubbleOneLeft
                  : styles.smallBubbleOneRight
              }
            ></div>
            <div
              className={
                isSwimmingRight
                  ? styles.smallBubbleTwoLeft
                  : styles.smallBubbleTwoRight
              }
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SwimmingFish;
