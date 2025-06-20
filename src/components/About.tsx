
const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", 
    "LLaMA", "Streamlit", "TailwindCSS", "MongoDB"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi there! I'm a passionate developer who thrives on turning ideas into reality through code. 
              I love the challenge of solving complex problems and creating elegant solutions that make a difference.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech has led me to work with cutting-edge technologies like AI/ML models, 
              modern web frameworks, and cloud platforms. I'm always eager to learn new technologies 
              and stay up-to-date with industry trends.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6">What I Love Building</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                AI-powered web applications
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Interactive data visualizations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Modern, responsive user interfaces
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                RESTful APIs and microservices
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 hover:scale-105 transition-transform duration-200"
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
