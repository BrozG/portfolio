
const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", 
    "LLaMA", "Streamlit", "TailwindCSS", "MongoDB"
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed font-light">
              Hi there! I'm a passionate developer who thrives on turning ideas into reality through code. 
              I love the challenge of solving complex problems and creating elegant solutions that make a difference.
            </p>
            
            <p className="text-gray-400 leading-relaxed font-light">
              My journey in tech has led me to work with cutting-edge technologies like AI/ML models, 
              modern web frameworks, and cloud platforms. I'm always eager to learn new technologies 
              and stay up-to-date with industry trends.
            </p>

            <p className="text-gray-400 leading-relaxed font-light">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-medium text-white mb-6">What I Love Building</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center font-light">
                <span className="w-1 h-1 bg-white rounded-full mr-4"></span>
                AI-powered web applications
              </li>
              <li className="flex items-center font-light">
                <span className="w-1 h-1 bg-white rounded-full mr-4"></span>
                Interactive data visualizations
              </li>
              <li className="flex items-center font-light">
                <span className="w-1 h-1 bg-white rounded-full mr-4"></span>
                Modern, responsive user interfaces
              </li>
              <li className="flex items-center font-light">
                <span className="w-1 h-1 bg-white rounded-full mr-4"></span>
                RESTful APIs and microservices
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-white text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-900 text-gray-300 px-4 py-2 rounded-full border border-gray-800 hover:border-gray-600 transition-colors duration-200 text-sm font-light"
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
