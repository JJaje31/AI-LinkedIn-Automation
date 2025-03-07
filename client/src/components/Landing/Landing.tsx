import { motion } from "framer-motion";
import React from "react";

const Landing: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-10 lg:px-32 py-20 overflow-hidden">
                   {/* Background AI Abstract Shapes */}
          <div className="absolute inset-0 w-full h-full -z-0">
                <svg 
                    className="absolute top-20 left-10 w-32 h-32 opacity-30 animate-spin-slow" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 200 200"
                >
                    <path fill="rgba(59, 130, 246, 0.2)" d="M52.4,-61.6C64.9,-50.9,70.8,-32.2,72,-14.5C73.1,3.2,69.5,19.9,60.8,35.3C52.2,50.7,38.6,64.7,21.7,70.2C4.9,75.8,-15.3,72.9,-33.3,64.4C-51.2,56,-67.1,42,-70.6,24.8C-74.1,7.6,-65.2,-12.8,-53.1,-28.7C-41.1,-44.5,-26,-55.7,-9.5,-61.8C7,-67.9,29.8,-68.9,52.4,-61.6Z" transform="translate(100 100)" />
                </svg>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
            </div>
            
         
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 md:w-1/2 flex justify-center"
            >
                <img 
                    src="/images/ai-autobot.png" 
                    alt="AI Automation" 
                    className=" w-[80%] md:w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
                />
            </motion.div>

          
             <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:ml-20 md:w-1/2 text-center md:text-left space-y-6"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Supercharge Your <span className="text-blue-500">LinkedIn Growth</span> 
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Effortlessly connect, engage, and grow your professional network with 
                    AI-powered automation. Send personalized messages, manage connections, 
                    and boost engagement—saving time while maximizing your LinkedIn potential.
                </p>

              
                 <div className="flex justify-center md:justify-start gap-4">
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        className="h-10 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white text-lg px-6 rounded-lg shadow-lg transition-transform"
                    >
                        Get Started
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        className="h-10 cursor-pointer bg-gray-800 hover:bg-gray-700 text-gray-300 text-lg px-6 rounded-lg border border-gray-600 shadow-lg transition-transform"
                    >
                        Learn More
                    </motion.button>
                </div>
            </motion.div>  

        </div>
    );
};
export default Landing;