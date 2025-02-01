import { motion } from "framer-motion";
import { AnimatedText } from "./ui/animated-text";
import SpaceBackground from "./ui/SpaceBackground"; // Import SpaceBackground

const Timeline = () => {
    const events = [
        { date: "March 15", title: "Registration Opens", description: "Start forming your teams" },
        { date: "March 25", title: "Registration Closes", description: "Last day to register" },
        { date: "March 30", title: "Hackathon Starts", description: "48 hours of coding begins" },
        { date: "April 1", title: "Submission Deadline", description: "Projects due by 11:59 PM" },
        { date: "April 5", title: "Winners Announced", description: "Prize distribution ceremony" },
    ];

    return (
        <>
            <section className="relative py-20 bg-black px-4 overflow-hidden">
                {/* Space Background */}
                <div className="absolute inset-0 z-0">
                    <SpaceBackground />
                </div>

                {/* Timeline Content */}
                <div className="relative max-w-6xl mx-auto z-10">
                    <AnimatedText
                        text="Event Timeline"
                        className="text-4xl font-extrabold mb-12 text-center text-white tracking-wide"
                    />
                    
                    {/* Vertical Line */}
                    <div className="relative w-full flex flex-col items-center">
                        <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block" />

                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                className="relative mb-12 flex flex-col sm:flex-row items-center sm:justify-between sm:w-full max-w-4xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute sm:static left-1/2 sm:left-auto transform -translate-x-1/2 sm:translate-x-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-black rounded-full shadow-lg animate-pulse" />

                                {/* Timeline Card */}
                                <div
                                    className={`w-full sm:w-1/2 px-6 ${
                                        index % 2 === 0
                                            ? "sm:pr-12 text-center sm:text-right"
                                            : "sm:pl-12 text-center sm:text-left"
                                    }`}
                                >
                                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 border border-gray-700">
                                        <h3 className="text-xl font-bold text-purple-400">{event.date}</h3>
                                        <h4 className="text-lg font-semibold mb-2 text-white">{event.title}</h4>
                                        <p className="text-gray-300 leading-relaxed">{event.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timeline;
