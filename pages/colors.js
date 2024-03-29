import ColorWheel from '../components/Color/ColorWheel';
import PhotoUploader from '../components/Color/PhotoUploader';

export default function ColorsPage() {
  return (
        <div>
            <h1 className='text-center'>Learn More About <span className='css-rainbow-text'>Colors</span> (Come Back Later For More Functionalities) </h1>
            <div className='flex flex-wrap lg:flex-nowrap justify-center items-center mr-16'>
                <ColorWheel />
            <div>
                <h1 className="mb-8 text-center lg:text-left">Analyze a Photo</h1>
                <PhotoUploader />
            </div>
            </div>
            {/* <div className='bg-lightgray rounded-lg m-10 p-10'>
                <h1 className='text-center'>How Do We Categorize Color?</h1>
            </div> */}
        </div>

  );
}
