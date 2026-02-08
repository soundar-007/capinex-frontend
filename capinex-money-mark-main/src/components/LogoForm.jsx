import React, { useState } from "react";
import axios from "axios";

const LogoForm = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:3000/upload", formData);
      setMessage("Upload successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Upload failed");
    }
  };

  return (
<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md text-center">
  <h2 className="text-2xl font-semibold mb-4 text-gray-700">Upload an Image</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
    />
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Upload
    </button>
  </form>
  <p className="mt-4 text-sm text-green-600">{message}</p>
</div>

  );
};

export default LogoForm;
