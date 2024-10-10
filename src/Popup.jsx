import React, { useState } from "react";
import emailjs from "emailjs-com";

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_01lixmb",
        "template_xyt098t",
        formData,
        "g3ezO-xzHo2Qyrrc7"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        onClose(); // Close the popup after successful submission
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  return (
    <div className="popup-form fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-400"
            rows="4"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold p-2 rounded hover:opacity-80 transition"
          >
            Send
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-600 text-white font-semibold w-full p-2 rounded hover:opacity-80 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
