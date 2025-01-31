import {
    Calendar,
    Users,
    Code,
    Trophy,
    ChevronRight,
    MessageCircle,
    Instagram,
    Github,
    Twitter,
    MapPin,
    Award,
    Gift,
    Sparkles,
    Ruler,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedText } from "./components/ui/animated-text";
import Timeline from "./components/Timeline";
import Tracks from "./components/Tracks";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import Sponsors from "./components/Sponsors";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Rules from "./components/Rules";

function App() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
                {/* Hero Section with Enhanced Effects */}
                <Hero />
                {/* Timeline Section */}
                <Timeline></Timeline>

                {/* Tracks Section */}
                <Tracks></Tracks>

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
