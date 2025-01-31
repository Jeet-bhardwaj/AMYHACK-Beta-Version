import { Calendar, Users, Code, Trophy, ChevronRight, MessageCircle, Instagram, Github, Twitter, MapPin, Award, Gift, Sparkles, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedText } from './components/ui/animated-text';
import Timeline from './components/Timeline';
import Tracks from './components/Tracks';
import Hero from './components/Hero';
import Prizes from "./components/Prizes"
import Sponsors from './components/Sponsors';
import Location from './components/Location';
import Footer from './components/Footer';
import Rules from './components/Rules';

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
      <Rules></Rules>
     

      {/* Location Section */}
    <Location></Location>

      {/* Footer */}
      <Footer></Footer>
    </div>
            </>
  );
}

export default App;