
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Application",
      description: "A modern chat application powered by LLaMA with real-time messaging and AI responses",
      tech: ["React", "LLaMA", "WebSocket", "Node.js"],
      github: "https://github.com/yourusername/ai-chat",
      demo: "https://your-demo-link.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard built with Streamlit for analyzing and visualizing complex datasets",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"],
      github: "https://github.com/yourusername/data-dashboard",
      demo: "https://your-demo-link.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with modern UI and secure payment integration",
      tech: ["React", "TypeScript", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-demo-link.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-purple-600/20 text-purple-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
