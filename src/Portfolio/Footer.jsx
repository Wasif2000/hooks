// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white p-4 text-center">
      <p>© 2024 Wasif Ali</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/your-profile" className="hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/your-profile" className="hover:underline">LinkedIn</a>
        <a href="mailto:your-email@example.com" className="hover:underline">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
