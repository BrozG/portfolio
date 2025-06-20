
const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", 
    "LLaMA", "Streamlit", "TailwindCSS", "MongoDB"
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-about">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center animate-fade-in-up">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-6 animate-slide-in-left elegant-border p-8 glass-effect">
            <p className="text-gray-300 leading-relaxed font-light">
              Hi there! I'm a passionate developer who thrives on turning ideas into reality through code. 
              I love the challenge of solving complex problems and creating elegant solutions that make a difference.
            </p>
            
            <p className="text-gray-300 leading-relaxed font-light">
              My journey in tech has led me to work with cutting-edge technologies like AI/ML models, 
              modern web frameworks, and cloud platforms. I'm always eager to learn new technologies 
              and stay up-to-date with industry trends.
            </p>

            <p className="text-gray-300 leading-relaxed font-light">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="elegant-border p-8 glass-effect hover-glow animate-slide-in-right">
            <h3 className="text-xl font-medium text-white mb-6">What I Love Building</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                AI-powered web applications
              </li>
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                Interactive data visualizations
              </li>
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                Modern, responsive user interfaces
              </li>
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                RESTful APIs and microservices
              </li>
            </ul>
          </div>
        </div>

        <div className="animate-fade-in-delay-3 elegant-border p-8 glass-effect">
          <h3 className="text-xl font-medium text-white text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="bg-white/10 text-gray-300 px-4 py-2 rounded-full border border-white/20 hover:border-white/40 hover:text-white hover:scale-105 transition-all duration-300 text-sm font-light cursor-default backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out both'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
