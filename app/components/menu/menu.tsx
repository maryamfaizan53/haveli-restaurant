"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalImage('');
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 py-12">
      <h2 className="text-3xl font-bold pl-10 mt-8">MENU / <strong className="text-orange-500 text-2xl font-semibold">CATEGORIES</strong></h2>

      {/* Starter, Salad , Soup */}
      <div onClick={() => openModal("/menu/soup.png")} className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8 cursor-pointer">
        <div className="md:w-1/2 mt-20 pl-10">
          <h2 className="text-orange-500 bold text-2xl mb-2 mt-4">
            Starter, Salad , Soup
          </h2>
          <p className="text-lg">
            Start your meal right with our flavorful Starters, refreshing Salads, and soul-soothing Soups - a perfect beginning to your dining experience.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <Image
              src="/pictures/soup.png"
              alt="Starter, Salad , Soup"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-black p-4 rounded-lg max-w-md w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-red-800 text-xl">
              ✕
            </button>
            <div className='relative w-[600] h-[80vh]'>
            <Image
              src={modalImage}
              alt="Popup Image"
              fill
              className="rounded"
            />
            </div>
          </div>
        </div>
      )}

      {/* Karahi, Handi */}
      <div onClick={() => openModal("/menu/karahi.png")}  className="mt-16 flex flex-col md:flex-row-reverse items-center md:items-start gap-8 cursor-pointer">
        <div className="md:w-1/2 mt-20 pl-10">
          <h2 className="text-orange-500 bold text-2xl mb-2 mt-4">
            Karahi, Handi
          </h2>
          <p className="text-lg">
            Indulge in our flavorful Karahi and Handi, slow-cooked to perfection with aromatic spices for a truly authentic taste.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <Image
              src="/pictures/karahi.png"
              alt="Karahi, Handi"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Fast Food */}
      <div onClick={() => openModal("/menu/fastfoodmenu.png")} className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8 cursor-pointer">
        <div className="md:w-1/2 mt-20 pl-10">
          <h2 className="text-orange-500 bold text-2xl mb-2 mt-4">
            Fast Food
          </h2>
          <p className="text-lg">
            Quick, tasty, and always satisfying - from juicy burgers to crispy fries, we serve your favorites hot and fresh!
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <Image
              src="/pictures/fastfood.png"
              alt="Fast Food"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Chinese */}
      <div onClick={() => openModal("/menu/chinese.jpg")}  className="mt-16 flex flex-col md:flex-row-reverse items-center md:items-start gap-8 cursor-pointer">
        <div className="md:w-1/2 mt-20 pl-10">
          <h2 className="text-orange-500 bold text-2xl mb-2 mt-4">
            Chinese
          </h2>
          <p className="text-lg">
            Experience the rich taste of traditional Chinese dishes - aromatic, flavorful, and made to perfection.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <Image
              src="/pictures/chinese.png"
              alt="Chinese"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Chullu with Rice */}
      <div onClick={() => openModal("/menu/chullu.png")} className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8 cursor-pointer">
        <div className="md:w-1/2 mt-20 pl-10">
          <h2 className="text-orange-500 bold text-2xl mb-2 mt-4">
            Chullu with Rice
          </h2>
          <p className="text-lg">
            Relish our Chullu with aromatic rice, a hearty and flavorful dish for your perfect meal.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <Image
              src="/pictures/chullu.png"
              alt="Chullu with Rice"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Shakes */}
      <div onClick={() => openModal("/menu/shakes.png")}  className="mt-16 flex flex-col md:flex-row-reverse items-center md:items-start gap-8 cursor-pointer">
        <div className="md:w-1/2 mt-20 pl-10">
          <h2 className="text-orange-500 bold text-2xl mb-2 mt-4">
            Shakes
          </h2>
          <p className="text-lg">
            Quench your thirst with our delicious and creamy shakes, made with fresh ingredients and bursting with flavor.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <Image
              src="/pictures/shakes.png"
              alt="Shakes"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Main Course */}
      <div onClick={() => openModal("/menu/maincourse.png")} className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8 cursor-pointer">
        <div className="md:w-1/2 mt-20 pl-10">
          <h2 className="text-orange-500 bold text-2xl mb-2 mt-4">
            Main Course
          </h2>
          <p className="text-lg">
            Dive into our hearty main courses, crafted with the finest ingredients to satisfy your hunger.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <Image
              src="/pictures/maincourse.webp"
              alt="Main Course"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

    </div>
  );
}



