
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A passionate developer who loves building innovative solutions with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              Learn More About Me
            </a>
            <a
              href="#projects"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-200"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/60" size={32} />
      </div>
    </section>
  );
};

export default Hero;
