const About = () => {
  const skills = [
    "Python", "TypeScript", "JavaScript (ES6+)", "C++", "SQL",
    "React", "Next.js", "Tailwind CSS", "Node.js", "Flask",
    "LangChain", "RAG Pipelines", "LoRA Fine-tuning", "Phi-2 LLM",
    "HuggingFace Transformers", "Stable Diffusion", "PyTorch", "TensorFlow",
    "FAISS / ChromaDB", "MySQL", "PostgreSQL", "MongoDB", "Firebase",
    "Docker", "Git", "Vercel", "AWS (EC2/S3)"
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-about">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center animate-fade-in-up">
          About Me
        </h2>

        <div className="flex flex-col gap-16 items-start mb-16">
          <div className="space-y-6 animate-slide-in-left elegant-border p-8 glass-effect">
            <p className="text-gray-300 leading-relaxed font-light">
              I'm Brojen Gurung — a final-year B.Tech IT student from Gangtok, Sikkim, working at the intersection of AI/ML engineering and full-stack development. I build systems that are not just functional, but production-ready — from a real client website with a Cloudinary-powered admin panel to a scalable B2B AI platform achieving 100% domain classification accuracy using LoRA fine-tuned language models.
            </p>

            <p className="text-gray-300 leading-relaxed font-light">
              My current focus is <span className="text-white font-medium">NexusAI</span> — a scalable customer support AI system powered by Phi-2 with domain-specific LoRA adapters for Telecom, E-commerce, and Education. I designed the full architecture including the RAG pipeline, vector stores, and training pipeline — achieving up to 257% quality improvement over the base model. I'm also building <span className="text-white font-medium">Trading Seeko</span>, a crypto paper trading app with built-in lessons for beginners.
            </p>

            <p className="text-gray-300 leading-relaxed font-light">
              I don't just follow tutorials — I learn by building real things, breaking them, and figuring out why. Whether it's fine-tuning an LLM on limited GPU, deploying a RAG pipeline on real government PDFs, or shipping a live website for a client — I care about outcomes, not just code. Outside of tech, I stay sharp through basketball, gym, and the occasional hike through the hills of Sikkim.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto elegant-border p-8 glass-effect hover-glow animate-slide-in-right">
            <h3 className="text-xl font-medium text-white mb-6">What I Love Building</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                Scalable AI systems — RAG pipelines, LoRA fine-tuning, LLM integrations
              </li>
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                Full-stack web applications with real users and real impact
              </li>
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                Clean, responsive UIs that feel fast and intentional
              </li>
              <li className="flex items-center font-light hover:text-white transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                Backend APIs and data pipelines that handle real-world load
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