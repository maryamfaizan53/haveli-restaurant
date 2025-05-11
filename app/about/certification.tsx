import Image from "next/image";
import { motion } from "framer-motion";

const certifications = [
    {
        src: "/about/halal.png",
        alt: "halal",
    },
    {
        src: "/about/halal.png",
        alt: "halal",
    },
    {
        src: "/about/halal.png",
        alt: "halal",
    },
];

const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Certification() {
    return (
        <section className="bg-black text-white py-16 px-4 sm:px-8 md:px-20">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-[#c19d60] mb-8">
                CERTIFICATION
            </h1>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {certifications.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-black border-4 border-[#c19d60] rounded-xl p-4 sm:p-6 flex justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56"
                        variants={itemVariants}
                    >
                        {item.src ? (
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={120}
                                height={80}
                                className="object-contain max-w-full max-h-full"
                            />
                        ) : (
                            <span className="text-center text-orange-500 font-semibold">
                                {item.alt}
                            </span>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
