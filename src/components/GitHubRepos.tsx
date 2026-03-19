import { Github } from "lucide-react";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const GitHubRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/BrozG/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Python: "bg-green-500",
      ShaderLab: "bg-purple-500",
      CSS: "bg-pink-500",
      HTML: "bg-orange-500",
    };
    return colors[language] || "bg-gray-500";
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", { month: "short", year: "numeric" });
  };

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 animate-fade-in-up">
            GitHub Repositories
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light animate-fade-in-delay-1">
            Live from GitHub — always up to date
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-xl p-6 border border-gray-800 animate-pulse">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-gray-400">
            Could not load repositories. Check back later.
          </p>
        )}

        {/* Repos Grid */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 group hover-lift flex flex-col"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fadeInUp 0.6s ease-out both",
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <Github
                    className="text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:rotate-12 group-hover:scale-110 shrink-0"
                    size={20}
                  />
                  <h3 className="text-base font-medium text-white group-hover:text-blue-300 transition-colors duration-300 truncate">
                    {repo.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {repo.description || "No description provided."}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <>
                        <span className={`w-2 h-2 rounded-full shrink-0 ${getLanguageColor(repo.language)}`}></span>
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {repo.language}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    {repo.stargazers_count > 0 && (
                      <span>⭐ {repo.stargazers_count}</span>
                    )}
                    <span>{formatDate(repo.updated_at)}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* View All Button */}
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