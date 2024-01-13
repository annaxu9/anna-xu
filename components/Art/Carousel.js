import ArtImage from "./ArtImage";

export default function Carousel({ images }) {

  return (
    <div className="flex">
        <ArtImage img={[images[2], ""]} />
        <ArtImage img={[images[0], ""]} />
        <ArtImage img={[images[3], ""]} />
    </div>
  );
}
