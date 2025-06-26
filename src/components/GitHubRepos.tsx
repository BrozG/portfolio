
import { Github, Star, GitFork } from "lucide-react";

const GitHubRepos = () => {
  const repos = [
    {
      name: "python_chatbot",
      description: "A terminal-based chatbot using Python and JSON for query handling.",
      language: "Python",
      url: "https://github.com/BrozG/python_chatbot"
    },
    {
      name: "Rss_news-Feed-with search filter",
      description: "An RSS news feed viewer with built-in search and filter support.",
      language: "Python",
      url: "https://github.com/BrozG/Rss_news-Feed-with-search-filter"
    },
    {
      name: "Sikkim_chatbot",
      description: "AI-powered chatbot for Sikkim tourism queries using IBM Watson and LLaMA.",
      language: "Python",
      url: "https://github.com/BrozG/Sikkim_chatbot"
    },
    {
      name: "Image_Generator",
      description: "Custom AI wallpaper generator using Stable Diffusion and CUDA.",
      language: "Python",
      url: "https://github.com/BrozG/Image_Generator"
    },
    {
      name: "Sussy-Bird-FlappyBird-",
      description: "A Flappy Bird clone game built with Unity and C#.",
      language: "ShaderLab",
      url: "https://github.com/BrozG/SussyBird-FlappyBird-"
    },
    {
      name: "gurumurti_website",
      description: "Responsive business site for decorators built with React and Tailwind.",
      language: "TypeScript",
      url: "https://github.com/BrozG/gurumurti_website"
    }
  ];

  const getLanguageColor = (language: string) => {
    const colors = {
      TypeScript: "bg-blue-500",
      React: "bg-cyan-500",
      Python: "bg-green-500",
      "Node.js": "bg-emerald-500",
      CSS: "bg-pink-500",
      JavaScript: "bg-yellow-500"
    };
    return colors[language as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 animate-fade-in-up">
            GitHub Repositories
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light animate-fade-in-delay-1">
            Explore my open-source contributions and personal projects on GitHub
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 group hover-lift"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out both'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Github className="text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:rotate-12 group-hover:scale-110" size={20} />
                <h3 className="text-lg font-medium text-white group-hover:text-gray-200 transition-colors duration-300">
                  {repo.name}
                </h3>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {repo.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)} group-hover:scale-125 transition-transform duration-300`}></span>
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{repo.language}</span>
                </div> 
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-delay-3">
          <a
            href="https://github.com/BrozG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg group"
          >
            <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:tracking-wide transition-all duration-300">View All Repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;
