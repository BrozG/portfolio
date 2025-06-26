import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SussyBird_Game",
      description: "A playful Flappy Bird-inspired game built with Unity and C#. It features smooth animations, basic physics, and a scoring system. This project was my entry point into game development, helping me understand game loops, collisions, and UI design in Unity.",
      stack: ["Unity", "C#", "2D Physics"],
      github: "https://github.com/BrozG/SussyBird-FlappyBird-",
      image: "SussyBird.jpeg"
    },
    {
      id: 2,
      title: "Image_Generator",
      description: "A creative image generation tool built using Stable Diffusion and local GPU (RTX 3050). It allows users to generate custom wallpapers based on text prompts. I implemented fine-tuned prompting, facial personalization (in progress), and deployed it as a local prototype — the first step toward building visual AI agents.",
      stack: ["Python", "Stable Diffusion", "CUDA"],
      github: "https://github.com/BrozG/Image_Generator",
      image: "generated_wallpaper.png"
    },
    {
      id: 3,
      title: "Gurumurti Decorators – Client Portfolio Website",
      description: "Designed and developed a fully responsive business website for a local event and decor service provider. The site highlights services, gallery, testimonials, and includes a client message form. Built with React, TypeScript, and Tailwind CSS, and deployed on Vercel with a custom domain.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
      github: "https://github.com/BrozG/gurumurti_website",
      image: "website.png"
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative bg-projects overflow-hidden">
      
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center animate-fade-in-up">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="elegant-border p-6 glass-effect hover-lift transition-all duration-500 group animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.2}s`
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
                  View Code
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
