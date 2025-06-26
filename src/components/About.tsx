
const About = () => {
  const skills = [
    "Large Language Models (LLMs)","Generative AI (Diffusion, NLP)","React","Tailwind CSS",
    "Python"," JavaScript", "Streamlit","Flask","Git","Vercel","Edge AI","Firebase" ];

  return (
    <section id="about" className="py-24 px-6 relative bg-about">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center animate-fade-in-up">
          About Me
        </h2>
        
        <div className="flex flex-col gap-16 items-start mb-16">
          <div className="space-y-6 animate-slide-in-left elegant-border p-8 glass-effect">
            <p className="text-gray-300 leading-relaxed font-light">
              Hi,
              I'm a developer who enjoys turning ideas into working systems — whether it's an AI-powered assistant, a personalized image generator, or a full-fledged website for a real client. My interests lie at the intersection of large language models (LLMs), generative AI, and user-focused web development. I don’t just follow tutorials — I learn best by building, breaking, and fixing things until they actually work.
            </p>
            
            <p className="text-gray-300 leading-relaxed font-light">
            </p>
              Over time, I’ve explored everything from local model deployment with limited GPU power to integrating AI agents and automation into practical use cases. I’m especially drawn to projects where intelligence meets design — where a chatbot can answer with context or a web app can feel genuinely helpful. I enjoy the challenge of figuring things out with the tools I have, even if that sometimes means wrestling with a few errors at 2 a.m.

            <p className="text-gray-300 leading-relaxed font-light">
              Outside of code, you’ll find me learning new tools, staying updated with AI trends, or pushing myself outdoors — whether it’s a workout, a hike, or just unplugging to reset. I believe staying active sharpens not just the body, but the mind too. That balance keeps me curious, creative, and ready to take on new challenges — both in tech and in life.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto elegant-border p-8 glass-effect hover-glow animate-slide-in-right">
            <h3 className="text-xl font-medium text-white mb-6">What I Love Building</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                Smart, AI-powered web apps
              </li>
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                TinyML projects for edge devices
              </li>
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                Clean, responsive user interfaces
              </li>
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                Scalable APIs and backend systems

              </li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto animate-fade-in-delay-3 elegant-border p-8 glass-effect">
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
