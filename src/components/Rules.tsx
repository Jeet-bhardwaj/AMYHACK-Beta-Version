import { Calendar, Users, Code, Trophy, ChevronRight, MessageCircle, Instagram, Github, Twitter, MapPin, Award, Gift, Sparkles, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedText } from './ui/animated-text';



const Rules = () => {
     return (<>
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
     </>);
     
}

export default Rules;