import { useState } from 'react';

export default function PhotoUploader() {
  const [imageURL, setImageURL] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageURL(URL.createObjectURL(file));
    }
  };

  return (
    <div>
            <div className="flex flex-row items-center justify-center">
    <div>
        <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
        />
        {imageURL && (
        <img
            src={imageURL}
            alt="Uploaded"
            className="mt-4 w-60 h-60 object-cover"
        />
        )}
    </div>
    </div>
    </div>



  );
};
