import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import Typed from "typed.js";
import "particles.js";

const Portfolio = () => {
  useEffect(() => {
    new Typed("#animated-name", {
      strings: ["Ananya Jannatha", "Machine Learning Enthusiast", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 relative">
      {/* Particles.js Background */}
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full -z-10"></div>
      
      {/* Profile Image */}
      <img
        src="profile.jpg"
        alt="Ananya"
        className="w-40 h-40 rounded-full border-4 border-blue-400 mb-6"
      />
      
      {/* Animated Name */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-400">
        <span id="animated-name"></span>
      </h1>
      
      {/* About Me Section */}
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          Hi, I'm Ananya, a passionate **frontend developer** with experience in building interactive
          and user-friendly web applications. I love creating modern designs and working on innovative projects.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
