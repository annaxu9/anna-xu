import Image from 'next/image'; // or your appropriate import

const gridImages = [
  "/home-images/cr1.png", "/home-images/cr2.png", "/home-images/cr3.png",
  "/home-images/cr4.png", "/home-images/cr5.png", "/home-images/cr6.png",
  "/home-images/cr7.png", "/home-images/cr8.png", "/home-images/cr9.png"
];

const MyGrid = () => {
  return (
    <div className="grid-container">
      {Array.from({ length: 48 }).map((_, index) => (
        <Image 
          key={index}
          src={gridImages[index % gridImages.length]} 
          width={72} 
          height={72} 
          className="image"
          alt="Grid Image"
        />
      ))}
    </div>
  );
}

export default MyGrid;
