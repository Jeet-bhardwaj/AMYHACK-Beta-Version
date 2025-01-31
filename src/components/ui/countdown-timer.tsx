import React, { useState, useEffect } from "react";
import {motion} from 'framer-motion'

const Countdown = () => {
    const targetDate = new Date("March 15, 2025 00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-4 justify-center flex-wrap">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-4 min-w-[120px]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-300">{unit}</div>
          </motion.div>
        ))}
      </div>
    );
};

export default Countdown;
