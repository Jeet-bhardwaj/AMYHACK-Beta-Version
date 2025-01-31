import { Calendar, Users, Code, Trophy, ChevronRight, MessageCircle, Instagram, Github, Twitter, MapPin, Award, Gift, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';
import { MovingBorder } from './ui/moving-border';
import { Meteors } from './ui/meteor-effect';
import  CountdownTimer from './ui/countdown-timer';

const Hero = () => {
    return <>
    {/* Hero Section with Enhanced Effects */}
    <header className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <Meteors number={20} />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-black opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            />
          <motion.img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" 
            alt="Background" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedText
            text="AMIKODERS HACKATHON 2024"
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            />
          <motion.p 
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            >
            48 Hours of Innovation, Coding, and Creation
          </motion.p>

          <div className="mb-12">
            <CountdownTimer />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <MovingBorder className="inline-block">
              <button className="relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-transform">
                Register Now
              </button>
            </MovingBorder>
            <MovingBorder className="inline-block">
              <a 
                href="https://whatsapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                >
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp
              </a>
            </MovingBorder>
          </div>
        </div>
      </header>
    </>;
};

export default Hero;
