import React, { useState } from "react";
import Image from "next/image";
import Star from "./Shapes/Star";

const gridImages = [
  "/home-images/cr1.png",
  "/home-images/cr2.png",
  "/home-images/cr3.png",
  "/home-images/cr4.png",
  "/home-images/cr5.png",
  "/home-images/cr6.png",
  "/home-images/cr7.png",
  "/home-images/cr8.png",
  "/home-images/cr9.png",
  "/home-images/cr10.png",
  "/home-images/cr11.png",
  "/home-images/cr12.png",
  "/home-images/cr13.png",
  "/home-images/cr14.png",
  "/home-images/cr15.png",
  "/home-images/cr16.png",
  "/home-images/cr17.png",
  "/home-images/cr18.png",
  "/home-images/lavender.png",
  "/home-images/mu.png",
  "/home-images/tarot.png",
  "/home-images/glass-animals.png",
  "/home-images/nebraska.png",
  "/home-images/rbhs.png",
  "/home-images/hydrangea.png",
  "/home-images/blueberries.png",
  "/home-images/tonys-chocolate.png",
  "/home-images/uo.png",
  "/home-images/070Shake.png",
  "/home-images/chinese-duck.png",
  "/home-images/saggitarius.png",
  "/home-images/spotify.png",
  "/home-images/strawberry-lemonade.png",
  "/home-images/vaseline.png",
  "/home-images/volleyball.png",
  "/home-images/yale.png",
  "/home-images/webdev.png",
  "/home-images/bike.png",
  "/home-images/peanut-butter.png",
  "/home-images/chappell-roan.png",
  "/home-images/cmu.png",
  "/home-images/hcii.png",
];

// Function to get a shuffled array of unique images
const getUniqueImages = (num) => {
  const shuffled = [...gridImages].sort(() => 0.5 - Math.random()); // Shuffle images
  return shuffled.slice(0, num); // Take first 'num' unique images
};

const MyGrid = () => {
  const [startDrop, setStartDrop] = useState(false);
  const [startFadeIn, setStartFadeIn] = useState(false);
  const [currentImages, setCurrentImages] = useState(getUniqueImages(6));

  const handleGridClick = () => {
    setStartDrop(true);
    setTimeout(() => {
      setStartDrop(false);
      setStartFadeIn(true);
      setTimeout(() => {
        setStartFadeIn(false);
      }, 1000);
    }, 4000);
  };

  // Function to change image on hover (ensures uniqueness again)
  const handleHover = (index) => {
    setCurrentImages((images) => {
      const newImages = getUniqueImages(6);
      return images.map((img, i) => (i === index ? newImages[i] : img));
    });
  };

  return (
    <div className="relative cursor-pointer">
      <div className="grid-container pb-5" onClick={handleGridClick}>
        {currentImages.map((src, index) =>
          index === 6 || index === 2 || index === 7 || index === 8 ? (
            <div key={index} className="bg-white w-100 h-100"></div>
          ) : index === 0 ? (
            <div
              key={index}
              className={`w-100 h-100 d-flex justify-content-center align-items-center ${
                startDrop ? "dropping" : ""
              } ${startFadeIn ? "fading-in" : ""}`}
            >
              <Star />
            </div>
          ) : (
            <div
              key={index}
              className={`p-3 ${startDrop ? "dropping" : ""} ${
                startFadeIn ? "fading-in" : ""
              }`}
              onMouseEnter={() => handleHover(index)}
            >
              <Image
                src={src}
                width={500}
                height={500}
                className="image"
                alt={src}
              />
            </div>
          )
        )}
      </div>
      {startDrop && !startFadeIn && (
        <div className="absolute p-3 top-0 left-0 right-0 bg-melrose w-full h-full text-center fade-in-out">
          <h1 className="text-white mt-24">
            hello and welcome! i hope you enjoy my site and take some time to
            explore :) -&nbsp;anna
          </h1>
          <p className="text-white mt-10">p.s. click on the fish</p>
        </div>
      )}
    </div>
  );
};

export default MyGrid;
