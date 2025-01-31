import { motion } from 'framer-motion';
import { Calendar, Users, Code, Trophy, ChevronRight, MessageCircle, Instagram, Github, Twitter, MapPin, Award, Gift, Sparkles } from 'lucide-react';


const Footer = () => {
     return (<><footer className="bg-black/40 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex justify-center gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              >
              {[
                { icon: <Github className="w-6 h-6" />, href: "#" },
                { icon: <Instagram className="w-6 h-6" />, href: "#" },
                { icon: <Twitter className="w-6 h-6" />, href: "#" }
              ].map((social, index) => (
                <motion.a
                key={index}
                href={social.href}
                className="hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
            <div className="text-center text-sm text-gray-400">
              © 2024 Amikoders Hackathon. All rights reserved.
            </div>
          </div>
        </footer></>)
}
export default Footer;