"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Certification from "./certification";

const About = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const isSection1InView = useInView(section1Ref, { once: true });
    const isSection2InView = useInView(section2Ref, { once: true });
    const isSection3InView = useInView(section3Ref, { once: true });

    return (
        <div className="bg-gray-950">
            {/* Hero Section */}
            <motion.section
                ref={section1Ref}
                className="bg-[url('/about/about1.jpg')] bg-cover bg-center text-white py-16 px-4 sm:px-8 md:px-20"
                id="about"
                initial={{ opacity: 0, y: -50 }}
                animate={isSection1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 text-left mx-4 sm:mx-8 md:mx-16 my-8 md:my-16 py-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isSection1InView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <Image
                            src="/about/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="mx-auto md:mx-0 mb-4"
                        />
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#c19d60] mb-4">
                            About Us
                        </h1>
                    </div>
                </motion.div>
            </motion.section>

            {/* Our Story Section */}
            <motion.section
                ref={section2Ref}
                className="bg-[url('/about/about2.jpg')] bg-cover bg-center text-white py-16 px-4 sm:px-8 md:px-20"
                id="about"
                initial={{ opacity: 0, y: 50 }}
                animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 text-left mb-16 md:mb-36 py-10 px-4 sm:px-8 md:px-10"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isSection2InView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1.5, delay: 1 }}
                >
                    <div className="w-full md:w-1/2">
                      {/* <p className="text-gray-100 font-extrabold leading-relaxed mb-4 text-lg sm:text-base">
                            Our story began with a passion for food and a desire to share the rich culinary traditions of Pakistan with the world. We believe that food is not just about sustenance; its about connection, culture, and community.
                        <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                            Our story began with a passion for food and a desire to share the rich culinary traditions of Pakistan with the world. We believe that food is not just about sustenance; it"&apos;"s about connection, culture, and community.
                        </p>
                        <p className="text-gray-100 font-extrabold leading-relaxed mb-4 text-lg sm:text-base">
                            From our humble beginnings, we have grown into a beloved destination for those seeking authentic Pakistani cuisine. Our team is dedicated to providing an unforgettable dining experience, where every meal is a celebration of flavor and tradition.
                        </p>   */}
                        <p className="text-gray-100 font-extrabold leading-relaxed mb-4 text-lg sm:text-base">
  Our story began with a passion for food and a desire to share the rich culinary traditions of Pakistan with the world. We believe that food is not just about sustenance; its about connection, culture, and community.
</p>
<p className="text-gray-100 font-extrabold leading-relaxed mb-4 text-lg sm:text-base">
  From our humble beginnings, we have grown into a beloved destination for those seeking authentic Pakistani cuisine. Our team is dedicated to providing an unforgettable dining experience, where every meal is a celebration of flavor and tradition.
</p>
                    </div>
                </motion.div>
            </motion.section>

            {/* Manufacturing Section */}
            <motion.section
                ref={section3Ref}
                className="bg-[url('/about/about3.jpg')] bg-cover bg-center text-white py-16 px-4 sm:px-8 md:px-20"
                id="about"
                initial={{ opacity: 0, y: 50 }}
                animate={isSection3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 text-left mb-16 md:mb-24 py-10 px-4 sm:px-8 md:px-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isSection3InView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#c19d60] mb-4">
                            Manufacturing
                        </h1>
                        {/* <p className="text-gray-100 font-extrabold leading-relaxed mb-4 text-lg sm:text-base">
                            Our story began with a passion for food and a desire to share the rich culinary traditions of Pakistan with the world. We believe that food is not just about sustenance; its about connection, culture, and community.
                        <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                            Our story began with a passion for food and a desire to share the rich culinary traditions of Pakistan with the world. We believe that food is not just about sustenance; it"&apos;"s about connection, culture, and community.
                        </p>
                        <p className="text-gray-100 font-extrabold leading-relaxed mb-4 text-lg sm:text-base">
                            From our humble beginnings, we have grown into a beloved destination for those seeking authentic Pakistani cuisine. Our team is dedicated to providing an unforgettable dining experience, where every meal is a celebration of flavor and tradition.
                        </p> */}
                        <p className="text-gray-100 font-extrabold leading-relaxed mb-4 text-lg sm:text-base">
  Our story began with a passion for food and a desire to share the rich culinary traditions of Pakistan with the world. We believe that food is not just about sustenance; its about connection, culture, and community.
</p>
<p className="text-gray-100 font-extrabold leading-relaxed mb-4 text-lg sm:text-base">
  From our humble beginnings, we have grown into a beloved destination for those seeking authentic Pakistani cuisine. Our team is dedicated to providing an unforgettable dining experience, where every meal is a celebration of flavor and tradition.
</p>
                        <Image
                            src="/about/halal.png"
                            alt="Halal Certification"
                            width={200}
                            height={200}
                            className="rounded-full shadow-lg mt-4 mx-auto md:mx-0"
                        />
                    </div>
                </motion.div>
            </motion.section>

            <Certification />
        </div>
    );
};

export default About;
