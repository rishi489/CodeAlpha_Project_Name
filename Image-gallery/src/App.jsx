// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';

const images = [
  'https://source.unsplash.com/random/600x600?sig=1',
  'https://source.unsplash.com/random/600x600?sig=2',
  'https://source.unsplash.com/random/600x600?sig=3',
  'https://source.unsplash.com/random/600x600?sig=4',
  'https://source.unsplash.com/random/600x600?sig=5',
  'https://source.unsplash.com/random/600x600?sig=6',
  'https://source.unsplash.com/random/600x600?sig=7',
  'https://source.unsplash.com/random/600x600?sig=8',
  'https://source.unsplash.com/random/600x600?sig=9',
];

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to the Image Gallery</h1>
        <p className="text-lg text-center max-w-2xl mb-8">
          Discover a curated selection of beautiful images. Scroll down to explore more.
        </p>
        <a href="#gallery" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300">
          View Gallery
        </a>
      </section>

      <section id="gallery" className="bg-gray-100 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Image Gallery</h2>
        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 px-6 md:px-12">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-lg font-semibold text-center">
                Image {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
