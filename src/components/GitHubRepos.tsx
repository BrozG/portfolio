
import { Github, Star, GitFork } from "lucide-react";

const GitHubRepos = () => {
  const repos = [
    {
      name: "awesome-ai-tools",
      description: "A curated list of awesome AI tools and resources for developers",
      language: "TypeScript",
      stars: 342,
      forks: 67,
      url: "https://github.com/yourusername/awesome-ai-tools"
    },
    {
      name: "react-dashboard-kit",
      description: "Modern React dashboard template with TypeScript and Tailwind CSS",
      language: "React",
      stars: 156,
      forks: 34,
      url: "https://github.com/yourusername/react-dashboard-kit"
    },
    {
      name: "python-data-analyzer",
      description: "Python toolkit for automated data analysis and visualization",
      language: "Python",
      stars: 89,
      forks: 23,
      url: "https://github.com/yourusername/python-data-analyzer"
    },
    {
      name: "ml-model-deployment",
      description: "Production-ready ML model deployment with Docker and FastAPI",
      language: "Python",
      stars: 234,
      forks: 45,
      url: "https://github.com/yourusername/ml-model-deployment"
    },
    {
      name: "api-rate-limiter",
      description: "Lightweight and configurable rate limiting middleware for APIs",
      language: "Node.js",
      stars: 78,
      forks: 19,
      url: "https://github.com/yourusername/api-rate-limiter"
    },
    {
      name: "css-animation-library",
      description: "Beautiful CSS animations and transitions for modern web apps",
      language: "CSS",
      stars: 145,
      forks: 28,
      url: "https://github.com/yourusername/css-animation-library"
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
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            GitHub Repositories
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
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
              className="block bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Github className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                <h3 className="text-lg font-medium text-white group-hover:text-gray-200 transition-colors">
                  {repo.name}
                </h3>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-light leading-relaxed">
                {repo.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></span>
                  <span className="text-xs text-gray-400">{repo.language}</span>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star size={12} />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={12} />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 text-sm font-medium"
          >
            <Github size={16} />
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;
