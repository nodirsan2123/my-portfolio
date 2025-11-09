import React from 'react';
import my_img from '../images/my_img.jpg';

export default function Main() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 md:px-20">
      {/* Profil sarlavhasi */}
      <div className="flex flex-col items-center gap-6 md:gap-8 text-center">
        <p className="text-4xl md:text-5xl font-bold text-gray-700">
          Frontend Developer
        </p>
        <p className="text-xl md:text-2xl text-gray-600 font-mono">
          Nodirbek Rakhimjonov
        </p>
      </div>

      {/* Profil rasmi */}
      <div className="my-6 md:my-8">
        <img
          src={my_img}
          alt="my img"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-gray-300 shadow-lg object-cover"
        />
      </div>

      {/* About / Tavsif */}
      <div className="max-w-3xl text-center">
        <p className="text-gray-800 font-light text-base md:text-lg leading-relaxed">
          Hello! I am Nodirbek. I love studying IT and learning new knowledge.
          Currently, I am studying the basics of programming and working with
          technologies such as React and Next.js. My goal is to contribute to the
          development of innovative applications and drive change through
          technology.
        </p>
      </div>
    </div>
  );
}
