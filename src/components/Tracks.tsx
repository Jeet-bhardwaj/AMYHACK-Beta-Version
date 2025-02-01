import { Users, Code, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedText } from "./ui/animated-text";
import Countdown from "./ui/countdown-timer";
const Tracks = () => {
    const tracks = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Web3 & Blockchain",
            description: "Build decentralized applications",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "AI & ML",
            description: "Create intelligent solutions",
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Open Innovation",
            description: "Solve real-world problems",
        },
    ];

    return (
        <>
            <section className="py-20 px-4 bg-black/30">
                <div className="max-w-6xl mx-auto">
                    <AnimatedText
                        text="Hackathon Tracks"
                        className="text-4xl font-bold mb-12 text-center"
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        {tracks.map((track, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="mb-4 text-purple-400">
                                    {track.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    {track.title}
                                </h3>
                                <p className="text-gray-300">
                                    {track.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Countdown />
        </>
    );
};
export default Tracks;
