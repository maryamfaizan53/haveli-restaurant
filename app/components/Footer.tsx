import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Address */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">HAVELI RESTAURAUNT KARACHI</h2>
          <p>B 117 Shahrah-e-Jahangir Rd .North Nazimabad,<br /> Haveli Highway – Super Highway, Near Jamali Bridge, Karachi ,<br />Pakistan</p>
        </div>

        {/* Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">COMPANY</h3>
          <ul>
            <li className="hover:underline cursor-pointer">ABOUT</li>
            <li className="hover:underline cursor-pointer">SHOP</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">CONTACT US</h3>
          <p> 0330-9990922</p> 
          <p> 0331 2599991</p>
        </div>

        {/* WhatsApp */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">SAY HELLO</h3>
          <a
            href="https://wa.me/0330-9990922"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 px-4 py-2 rounded-md font-semibold text-white hover:bg-green-600 transition"
          >
            <IoLogoWhatsapp size={20} />
            MESSAGE US ON WHATSAPP
          </a>
        </div>
      </div>

     {/* Map Section with Two Branches Side by Side */}
<div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row gap-6">
  {/* Branch 1 */}
  <div className="flex-1">
    <h4 className="text-white font-semibold mb-2">Haveli Kebab & Grill North 
        Nazimabad
    </h4>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24339.282734677105!2d67.03683073582498!3d24.930161266327897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1746832009707!5m2!1sen!2s"
      className="w-full rounded-md"
      height="300"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Branch 2 */}
  <div className="flex-1">
    <h4 className="text-white font-semibold mb-2">Haveli Restaurant Highway</h4>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d57867.69357736393!2d67.1189674!3d24.9752704!3m2!1i1024!2i768!4f13.1!2m1!1shaveli%20restaurant%20karachi%20highway%20location!5e0!3m2!1sen!2s!4v1746833761556!5m2!1sen!2s"
      className="w-full rounded-md"
      height="300"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <Image
          src="/halal-logo-1.jpg"
          alt="Halal Logo"
          width={100}
          height={100}
        />

        <div className="flex gap-4 text-white text-xl">
          <a href="https://www.facebook.com/share/1BV2vvgwfp/?mibextid=qi2Omg" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/havelirestaurantofficial?igsh=NzF6OThjYzk0OGl4" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://wa.me/0330-9990922" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm">
        © Copyright 2025 Haveli Restaurant. All Rights Reserved
      </div>
    </footer>
  );
}