
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-tight animate-fade-in-up">
            Hello, I'm{" "}
            <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-delay-1">
            A passionate developer who loves building innovative solutions with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <a
              href="#about"
              className="group bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg"
            >
              <span className="group-hover:tracking-wide transition-all duration-300">Learn More About Me</span>
            </a>
            <a
              href="#projects"
              className="group border border-gray-600 text-white px-8 py-4 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              <span className="group-hover:tracking-wide transition-all duration-300">View My Work</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="text-gray-500 hover:text-white transition-colors duration-300" size={24} />
      </div>
    </section>
  );
};

export default Hero;
