import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NexusAI — Scalable B2B AI",
      description: "Designed the full AI architecture for a scalable B2B customer support platform. Built domain-specific LoRA adapters on frozen Phi-2 achieving 100% classifier accuracy across Telecom, E-commerce and Education domains. RAG pipeline with vector stores delivers up to 257% quality improvement over base model.",
      stack: ["Python", "Phi-2", "LoRA", "LangChain", "FAISS", "Next.js"],
      github: "https://github.com/BrozG/nexusai-ml",
      live: "https://nexusai-genz.vercel.app/",
      image: "/NexusAi.png",
      badge: "🔄 In Progress"
    },
    {
      id: 2,
      title: "Gurumurti Decorators — Client Website",
      description: "Production website for a real client featuring a Cloudinary-powered admin gallery panel — allowing the client to upload and manage images independently without any developer help. Built with React, TypeScript and Tailwind CSS, deployed on Vercel with custom domain.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Cloudinary", "Vercel"],
      github: "https://github.com/BrozG/gurumurti_website",
      live: "https://gurumurti-website.vercel.app",
      image: "website.png",
      badge: "✅ Live"
    },
    {
      id: 3,
      title: "Trading Seeko — Crypto Paper Trading",
      description: "A crypto paper trading simulator that lets beginners practice trading without real money. Includes built-in lessons on how to trade, portfolio tracking and market simulation. Designed to make crypto trading accessible and educational for first-time investors.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/BrozG/Trading_Seeko",
      live: null,
      image: "/trading_seeko.png",
      badge: "🔄 In Progress"
    },
    {
      id: 4,
      title: "AI Wallpaper Generator",
      description: "Local AI image generation pipeline using Stable Diffusion with CUDA acceleration, optimized for 4GB VRAM on RTX 3050. Generates custom wallpapers from text prompts entirely offline — no API costs. Foundation for future AI-driven creative tools.",
      stack: ["Python", "Stable Diffusion", "CUDA", "PyTorch"],
      github: "https://github.com/BrozG/Image_Generator",
      live: null,
      image: "generated_wallpaper.png",
      badge: null
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative bg-projects overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center animate-fade-in-up">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="elegant-border p-6 glass-effect hover-lift transition-all duration-500 group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.badge && (
                  <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light flex-grow">
                {project.description}
              </p>

              {/* Stack */}
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

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-light group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                  View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-300 transition-colors text-sm font-light group/link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;