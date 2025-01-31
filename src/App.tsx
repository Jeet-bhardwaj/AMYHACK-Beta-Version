import React from 'react';
import { Calendar, Users, Code, Trophy, ChevronRight, MessageCircle, Instagram, Github, Twitter, MapPin, Award, Gift, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedText } from './components/ui/animated-text';
import { MovingBorder } from './components/ui/moving-border';
import { Meteors } from './components/ui/meteor-effect';
import  CountdownTimer from './components/ui/countdown-timer';
import Timeline from './components/Timeline';
import Tracks from './components/Tracks';
import Hero from './components/Hero';
import Prizes from "./components/Prizes"
import Sponsors from './components/Sponsors';
import Location from './components/Location';
import Footer from './components/Footer';





 

function App() {




  return (<>       
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section with Enhanced Effects */}
      <Hero/>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedText
            text="Event Timeline"
            className="text-4xl font-bold mb-12 text-center"
            />
          <Timeline />
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedText
            text="Hackathon Tracks"
            className="text-4xl font-bold mb-12 text-center"
            />
          <Tracks />
        </div>
      </section>

      {/* Prizes Section */}
      <Prizes></Prizes>

      {/* Sponsors Section */}
      <Sponsors></Sponsors>

      {/* Rules Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedText
            text="Rules & Guidelines"
            className="text-4xl font-bold mb-12 text-center"
            />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-lg p-8 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              >
              <h3 className="text-2xl font-bold mb-4">Participation Rules</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400 mt-1" />
                  <span>Teams must consist of 2-4 members</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400 mt-1" />
                  <span>All team members must be registered participants</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400 mt-1" />
                  <span>Projects must be original and created during the hackathon</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-lg p-8 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              >
              <h3 className="text-2xl font-bold mb-4">Submission Guidelines</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400 mt-1" />
                  <span>Submit projects before the deadline</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400 mt-1" />
                  <span>Include source code and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400 mt-1" />
                  <span>Prepare a 3-minute demo video</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
    <Location></Location>

      {/* Footer */}
<Footer></Footer>
    </div>
            </>
  );
}

export default App;