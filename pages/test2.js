import React, { useState, useEffect } from 'react';

export default function Resume() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const position = window.scrollY;
        setIsScrolled(position > 1); // Adjust '100' based on the position of your header
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className="w-4/5 mx-auto">
            <h1 className={`transition-colors duration-500 bavista ${isScrolled ? 'text-white' : 'text-lightgray'}`}>Oh hi<span className="nervada">!</span> we<span className="nervada">l</span>come<span className="nervada">!</span></h1>
            <div className={`transition-colors duration-500 ${isScrolled ? 'text-black' : 'text-lightgray'}`}>
                <h1 className="bavista2 text-center">Education</h1>
                <h2>Yale University - go bulldogs!</h2>
                <h2>B.S. in Computer Science</h2>
                <h2>Expected Graduation: December 2024</h2>
                <h2>Relavent Coursework:</h2>
                <h1 className='mt-5 text-center'>Skills</h1>
                <h1 className='mt-5 text-center'>Experience</h1>
                <h1 className='mt-5 text-center'>Projects</h1>
                <h1 className='mt-5 text-center'>Extracurricular</h1>
                <p>ry night sky above her modest studio. Elara spent countless hours perfecting her craft, capturing the essence of her surroundings in vibrant colors and bold strokes. One day, as Elara wandered through the village, she noticed something unusual. The townsfolk, usually so full of life and laughter, seemed troubled. Concerned, she approached the village elder, a wise woman named Mira. Mira explained that the village was facing a difficult time. The river, their main source of water, had begun to dry up, and the once bountiful crops were now wilting in the fields. Elara, deeply moved by the plight of her neighbors, decided to use her art to make a difference. She embarked on a mission to create a series of paintings that would bring hope and inspire action. Each canvas would tell a story, a call to unity and resilience in the face of adversity. The first painting depicted children playing by the river, their laughter echoing in the air. The river was full and lively, a symbol of abundance and joy. This piece reminded the villagers of better times and the importance of preserving their natural resources. In her second painting, Elara portrayed the farmers working together in the fields, their faces alight with determination. The golden hues of the harvest contrasted against the deep greens of the earth, illustrating the hard work and collaboration necessary to overcome their challenges. The third canvas was a portrayal of the entire village gathered in a circle, hands joined under the moonlit sky. This powerful image represented unity and the strength found in commun</p>

            </div>
            
        </div>
    )
}