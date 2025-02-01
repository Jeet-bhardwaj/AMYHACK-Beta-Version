import { motion } from "framer-motion";
import Navbar from "./Navebar";

export default function Hero() {
    return (
        <>
            <Navbar></Navbar>
            <section className="relative w-full h-screen overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/Expo.jpg"
                    className="absolute inset-0 w-full h-90% object-cover"
                >
                    <source src="/Expo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl text-yellow-400 font-extrabold"
                        style={{ fontFamily: "Orbitron, sans-serif" }}
                    >
                        HACK-IT 25
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl md:text-2xl text-blue-300 mt-2"
                        style={{ fontFamily: "Orbitron, sans-serif" }}
                    >
                        AMITY UNIVERSITY PATNA
                    </motion.h2>

                    <p className="text-lg md:text-xl text-gray-300 mt-1">
                        (15-19 Mar, 2025)
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
                        <a
                            href="/register/delegate"
                            className="px-6 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-300 transition"
                        >
                            Delegate Card Registration &gt;
                        </a>
                        <a
                            href="/register/event"
                            className="px-6 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-300 transition"
                        >
                            Event Registration &gt;
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 animate-bounce">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
}
