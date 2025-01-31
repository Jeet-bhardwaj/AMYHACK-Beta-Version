
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';






const sponsors = [
     { name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9' },
     { name: 'InnovateHub', logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41' },
     { name: 'CodeLabs', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623' },
   ];
const Sponsors = () => {
    return (
        <>
            <section className="py-20 px-4 bg-black/30">
                <div className="max-w-6xl mx-auto">
                    <AnimatedText
                        text="Our Sponsors"
                        className="text-4xl font-bold mb-12 text-center"
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        {sponsors.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-lg p-6 rounded-lg flex items-center justify-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
export default Sponsors;
