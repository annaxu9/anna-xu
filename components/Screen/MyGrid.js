import React, { useState } from 'react';
import Image from 'next/image';
import Star from './Shapes/Star';

const gridImages = [
    "/home-images/cr1.png", "/home-images/cr2.png", "/home-images/cr3.png",
    "/home-images/cr4.png", "/home-images/cr5.png", "/home-images/cr6.png",
    "/home-images/cr7.png", "/home-images/cr8.png", "/home-images/cr9.png",
    "/home-images/cr10.png", "/home-images/cr11.png", "/home-images/cr12.png", 
    "/home-images/cr13.png", "/home-images/cr14.png", "/home-images/cr15.png",
    "/home-images/cr16.png", "/home-images/lavender.png", "/home-images/mu.png",
    "/home-images/nebraska.png", "/home-images/rbhs.png", "/home-images/pride.png",
    "/home-images/blueberries.png", "/home-images/gingerade.png", "/home-images/tonys-chocolate.png", 
    "/home-images/uo.png", "/home-images/070Shake.png", "/home-images/chinese-duck.png", "/home-images/trilogy.png",
    "/home-images/saggitarius.png", "/home-images/spotify.png", "/home-images/strawberry-lemonade.png",
    "/home-images/vaseline.png", "/home-images/volleyball.png", "/home-images/yale.png", 
    "/home-images/webdev.png", "/home-images/bike.png"
  ];


const MyGrid = () => {
    // Function to get a random image
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * gridImages.length);
        return gridImages[randomIndex];
    };

    const [startDrop, setStartDrop] = useState(false);
    const [startFadeIn, setStartFadeIn] = useState(false);
    const [currentImages, setCurrentImages] = useState(Array.from({ length: 6 }, getRandomImage));
  
    const handleGridClick = () => {
      setStartDrop(true);
      setTimeout(() => {
          setStartDrop(false);
          setStartFadeIn(true);
          setTimeout(() => {
              setStartFadeIn(false);
          }, 1000); // Duration for the fade-in animation
      }, 4000); // Extended delay of 3 seconds before starting the fade-in
  };  
  
    // Function to change image on hover
    const handleHover = (index) => {
        setCurrentImages(images =>
        images.map((img, i) => i === index ? getRandomImage() : img)
        );
    };

    return (
      <div className='relative'>
        <div className="grid-container pb-5" onClick={handleGridClick}>
            {currentImages.map((src, index) => (
                index === 6 || index === 2 || index === 7 || index === 8 ? (
                  <div key={index} className='bg-white w-100 h-100'></div>
                ) :
                index === 0 ? (
                    <div key={index} className={`w-100 h-100 d-flex justify-content-center align-items-center ${startDrop ? 'dropping' : ''} ${startFadeIn ? 'fading-in' : ''}`}>
                        <Star />
                    </div>
                ) 
                :
                (
                <div key={index} className={`p-3 ${startDrop ? 'dropping' : ''} ${startFadeIn ? 'fading-in' : ''}`} onMouseEnter={() => handleHover(index)}>
                    <Image 
                    src={src}
                    width={72} 
                    height={72} 
                    className="image"
                    alt={src}
                    />
                </div>
                )
            ))}
        </div>
        {startDrop && !startFadeIn && (
          <div className="absolute p-3 top-0 left-0 right-0 bg-melrose w-full h-full text-center fade-in-out">
            <h1 className="text-white mt-24">hello and welcome! i hope you enjoy my site and take some time to explore :) -&nbsp;anna</h1>
            <p className="text-white mt-10">p.s. click on the fish</p>
          </div>
        )}

      </div>
    );
  };
  
export default MyGrid;