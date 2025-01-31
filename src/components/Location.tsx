import { Calendar, Users, Code, Trophy, ChevronRight, MessageCircle, Instagram, Github, Twitter, MapPin, Award, Gift, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';
import { MovingBorder } from './ui/moving-border';

const Location = () => {
     return (<>
          <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedText
            text="Event Location"
            className="text-4xl font-bold mb-12 flex flex-wrap justify-center"
            />
          <motion.div
            className="inline-flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            >
            <MapPin className="w-12 h-12 text-purple-400" />
            <h3 className="text-2xl font-bold">Tech Innovation Center</h3>
            <p className="text-gray-300">Gola road patna, AIKYAM CLuB</p>
            <p className="text-gray-300">Bihar, </p>
            <MovingBorder className="inline-block mt-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                >
                Get Directions
                <ChevronRight className="w-4 h-4" />
              </a>
            </MovingBorder>
          </motion.div>
        </div>
      </section>
     </>)


}

export default Location;