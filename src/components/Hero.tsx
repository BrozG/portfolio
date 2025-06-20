
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-tight">
            Hello, I'm{" "}
            <span className="font-medium">
              Your Name
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            A passionate developer who loves building innovative solutions with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 text-sm font-medium"
            >
              Learn More About Me
            </a>
            <a
              href="#projects"
              className="border border-gray-600 text-white px-8 py-4 rounded-full hover:border-white transition-all duration-200 text-sm font-medium"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-500" size={24} />
      </div>
    </section>
  );
};

export default Hero;
