import React from 'react';
import { Calendar, Users, Code, Trophy, ChevronRight, MessageCircle, Instagram, Github, Twitter, MapPin, Award, Gift, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';
import { MovingBorder } from './ui/moving-border';
import { Meteors } from './ui/meteor-effect';
import  CountdownTimer from './ui/countdown-timer';
import Timeline from './Timeline';
import Tracks from './Tracks';
import Hero from './Hero';




  const prizes = [
    { title: '1st Prize', amount: '₹50,000', icon: <Trophy className="w-8 h-8" /> },
    { title: '2nd Prize', amount: '₹30,000', icon: <Award className="w-8 h-8" /> },
    { title: '3rd Prize', amount: '₹20,000', icon: <Gift className="w-8 h-8" /> },
  ];

const Prizes = () =>{
     return (<><section className="py-20 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <AnimatedText
              text="Prizes & Rewards"
              className="text-4xl font-bold mb-12 text-center"
              />
            <div className="grid md:grid-cols-3 gap-8">
              {prizes.map((prize, index) => (
                <motion.div
                key={index}
                className="relative bg-white/10 backdrop-blur-lg p-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg" />
                  <div className="relative">
                    <div className="text-purple-400 mb-4 flex justify-center">{prize.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{prize.title}</h3>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                      {prize.amount}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section></>)
}

export default Prizes;