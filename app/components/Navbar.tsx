'use client';
import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-5xl font-bold tracking-wider pl-8"><Image src={"/logo/logo.png"} alt='Logo' width={50} height={50} className='rounded-full'/></Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-light tracking-wide text-sm">
          <Link href="/" className="hover:text-orange-500">HOME</Link>
          <Link href="/about" className="hover:text-orange-500">ABOUT</Link>
          <Link href="/menu" className="hover:text-orange-500">MENU</Link>
          <Link href="/gallery" className="hover:text-orange-500">GALLERY</Link>
          <Link href="/contact" className="hover:text-orange-500">CONTACT</Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-orange-500">
            <FaInstagram size={18} />
          </Link>
          <Link href="https://facebook.com" target="_blank" className="hover:text-orange-500">
            <FaFacebookF size={18} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden font-light tracking-wide text-sm">
          <Link href="/" onClick={toggleMenu} className="hover:text-orange-500">HOME</Link>
          <Link href="/about" onClick={toggleMenu} className="hover:text-orange-500">ABOUT</Link>
          <Link href="/menu" onClick={toggleMenu} className="hover:text-orange-500">MENU</Link>
          <Link href="/gallery" onClick={toggleMenu} className="hover:text-orange-500">GALLERY</Link>
          <Link href="/contact" onClick={toggleMenu} className="hover:text-orange-500">CONTACT</Link>
          <div className="flex gap-4">
            <Link href="https://instagram.com" target="_blank" className="hover:text-orange-500">
              <FaInstagram size={18} />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-orange-500">
              <FaFacebookF size={18} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
