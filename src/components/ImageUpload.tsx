import React, { useState, useRef, ChangeEvent } from "react";
import Upload from "../assets/upload.svg";

const ImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    // Trigger the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      // Check if the selected file is an image
      if (selectedFile.type.startsWith("image/")) {
        // Check if the file size is within the allowed limit (1 MB = 1024 KB)
        if (selectedFile.size <= 1024 * 1024) {
          // You can perform actions with the selected image file here
          setSelectedImage(selectedFile);
        } else {
          alert("Please select an image file smaller than 1 MB.");
        }
      } else {
        alert("Please select an image file.");
      }
    }
  };

  const handleImageDeletion = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col w-fit rounded-3xl shadow-xl ml-10 mt-4">
      {selectedImage ? (
        <div>
          <div className="rounded-tl-2xl rounded-tr-2xl">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected-image"
              className="rounded-tl-2xl rounded-tr-2xl max-w-full max-h-[300px]"
            />
          </div>
          <button
            className="py-5 px-7 font-semibold bg-white rounded-bl-2xl rounded-br-2xl flex gap-4 justify-start items-center cursor-pointer"
            onClick={handleImageDeletion}
          >
            <span className="font-bold text-[22px] text-red-600">X</span>
            <span className="font-bold text-[15px] text-red-600 mt-0.5">
              Delete Image
            </span>
          </button>
        </div>
      ) : (
        <div>
          <div className="py-6 px-7 text-xl font-semibold bg-cyan-100 rounded-tl-2xl rounded-tr-2xl">
            Upload Cover Image
          </div>
          <div className="py-14 px-8">
            <div
              className="flex flex-col justify-center items-center border-2 border-gray-400 border-dashed rounded-sm cursor-pointer py-10 px-8"
              onClick={handleButtonClick}
            >
              <img className="w-10" src={Upload} alt="upload-icon" />
              <h3 className="text-md mt-2 font-semibold">Upload Cover Image</h3>
              <p className="text-md text-gray-400 font-semibold">
                16:9 ratio is recommended. Max image size 1mb
              </p>
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
