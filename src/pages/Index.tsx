
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GitHubRepos from "@/components/GitHubRepos";
import Contacts from "@/components/Contacts";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-dynamic text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <GitHubRepos />
      <Contacts />
      <Contact />
    </div>
  );
};

export default Index;
