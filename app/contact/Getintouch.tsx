
"use client";

import React from "react";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

const GetInTouch: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex text-white text-lg justify-center items-center py-10 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-6xl bg-black p-8 text-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl text-[#c19d60] font-bold">Contact With Us</h2>
          <p className="text-gray-200">
            For more information about our Reservations & Services, please feel
            free to drop us an email. Our staff will always be there to help you
            out. Do not hesitate!
            <br />
            Lets make reservations or event oragization to your Dream place..
          </p>
          {/* Address */}
          <div className="flex items-start space-x-4">
            <FiMapPin className="text-2xl text-gray-300" />
            <div>
              <h3 className="font-bold text-[#c19d60]">Address</h3>
              <p className="text-gray-300">
                Haveli,Main Super highway, Near toll Plaza..
                <br />
                Haveli, New North Nazmabad, block 10.
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <FiPhone className="text-2xl text-gray-300" />
            <div>
              <h3 className="font-bold text-[#c19d60]">Phone</h3>
              <p className="text-gray-300">
                Mobile: 03213465780
                <br />
                Hotline: (021) 3456789
              </p>
            </div>
          </div>
          {/* Working Time */}
          <div className="flex items-start space-x-4">
            <FiClock className="text-2xl text-gray-300" />
            <div>
              <h3 className="font-bold text-[#c19d60]">Working Time</h3>
              <p className="text-gray-300">
                Monday-Friday: 2:00pm - 12:00pm
                <br />
                Saturday-Sunday: 2:00 - 2:00pm
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block font-medium text-yellow-300 mb-1"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-yellow-300 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block font-medium text-yellow-300 mb-1"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject of your message"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-medium text-yellow-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Hi! I'd like to ask about..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-300 text-black py-2 rounded-md hover:bg-red-950 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
