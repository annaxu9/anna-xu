import React, { useState } from 'react';
import Image from 'next/image';
import Star from '../Shapes/Star';

const gridImages = [
    "/home-images/cr1.png", "/home-images/cr2.png", "/home-images/cr3.png",
    "/home-images/cr4.png", "/home-images/cr5.png", "/home-images/cr6.png",
    "/home-images/cr7.png", "/home-images/cr8.png", "/home-images/cr9.png",
    "/home-images/cr10.png", "/home-images/cr11.png", "/home-images/cr12.png", 
    "/home-images/cr13.png", "/home-images/cr14.png", "/home-images/cr15.png",
    "/home-images/blueberries.jpg", "/home-images/mango-mysic.jpg", "/home-images/tonys-chocolate.png", 
    "/home-images/uo.png", "/home-images/070shake.jpg", "/home-images/chinese-duck.png", "/home-images/golden-pineapple.png",
    "/home-images/guava-goddess.png", "/home-images/spotify.png", "/home-images/strawberry-serenity.png",
    "/home-images/vaseline.jpeg", "/home-images/volleyball.png", "/home-images/yale.png"
  ];


const MyGrid = () => {
    // Function to get a random image
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * gridImages.length);
        return gridImages[randomIndex];
    };

    const [startDrop, setStartDrop] = useState(false);
    const [startFadeIn, setStartFadeIn] = useState(false);
    const [currentImages, setCurrentImages] = useState(Array.from({ length: 40 }, getRandomImage));
  
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
        <div className="grid-container" onClick={handleGridClick}>
            {currentImages.map((src, index) => (
                index === 0 || index === 3 || index === 10 || index === 11 || index === 16 || index === 17 || index === 20 || index === 25 || index === 26 || index === 30 || index === 35 || index === 37 ? (
                <div key={index} className='w-100 h-100 bg-white'>
                    {/* Content here */}
                </div>
                ) : index === 14 ? (
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
                    alt="Grid Image"
                    />
                </div>
                )
            ))}
        </div>
        {startDrop && !startFadeIn && (
          <div className="absolute top-0 left-0 right-0 bg-melrose w-full h-full text-center p-40 fade-in-out">
            <h1 className="text-white">hello and welcome! i hope you enjoy my site and take some time to explore :) -&nbsp;anna</h1>
            <p className="text-white mt-80">p.s. click on the fish</p>
          </div>
        )}

      </div>
    );
  };
  
export default MyGrid;