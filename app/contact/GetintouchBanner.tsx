import Link from 'next/link';
import React from 'react';

const GetintouchBanner: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: 'url("/haveli2.jpg")',
        // backgroundSize: 'cover', 
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for better contrast */}
      
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-extrabold mb-2">CONTACT US</h1>
        <p className="text-lg font-medium">
          <Link href="/" className="hover:underline">Home</Link> &gt; <span>Contact us</span>
        </p>
      </div>
    </section>
  );
};

export default GetintouchBanner;