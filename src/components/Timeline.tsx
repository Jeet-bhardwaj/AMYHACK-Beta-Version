import { motion } from "framer-motion";
import { AnimatedText } from "./ui/animated-text";

const Timeline = () => {
    const events = [
        {
            date: "March 15",
            title: "Registration Opens",
            description: "Start forming your teams",
        },
        {
            date: "March 25",
            title: "Registration Closes",
            description: "Last day to register",
        },
        {
            date: "March 30",
            title: "Hackathon Starts",
            description: "48 hours of coding begins",
        },
        {
            date: "April 1",
            title: "Submission Deadline",
            description: "Projects due by 11:59 PM",
        },
        {
            date: "April 5",
            title: "Winners Announced",
            description: "Prize distribution ceremony",
        },
    ];

    return (
        <>
            <section className="py-20  bg-black px-4">
                <div className="max-w-6xl mx-auto">
                    <AnimatedText
                        text="Event Timeline"
                        className="text-4xl font-bold mb-12 text-center"
                    />
                    <div className="relative">
                        <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2" />
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                className="relative mb-8 flex items-center justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div
                                    className={`w-1/2 ${
                                        index % 2 === 0
                                            ? "pr-12 text-right"
                                            : "pl-12"
                                    }`}
                                >
                                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-purple-400">
                                            {event.date}
                                        </h3>
                                        <h4 className="text-lg font-semibold mb-2">
                                            {event.title}
                                        </h4>
                                        <p className="text-gray-300">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timeline;
