import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chat Application",
      description: "A modern chat application powered by LLaMA with real-time messaging and intelligent responses.",
      stack: ["React", "TypeScript", "LLaMA", "Node.js"],
      github: "https://github.com/yourusername/ai-chat",
      demo: "https://ai-chat-demo.com",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets with intuitive charts and graphs.",
      stack: ["React", "D3.js", "Python", "Flask"],
      github: "https://github.com/yourusername/data-dashboard",
      demo: "https://data-dashboard-demo.com",
      image: "https://images.unsplash.com/photo-1517694712202-14f926bb67ee?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A fully functional e-commerce platform with user authentication, product management, and secure payments.",
      stack: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-platform-demo.com",
      image: "https://images.unsplash.com/photo-1523381294911-8cd69eb14aa3?w=400&h=250&fit=crop"
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative bg-projects">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center animate-fade-in-up">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="elegant-border p-6 glass-effect hover-lift transition-all duration-300 group"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.8s ease-out both'
              }}
            >
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs font-light border border-white/20 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-light group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-light group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
