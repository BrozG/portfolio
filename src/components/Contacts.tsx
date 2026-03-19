import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 px-6 relative bg-contacts overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-800/30"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 animate-fade-in-up">
            Let's Connect
          </h2>
          <p className="text-gray-400 font-light text-lg animate-fade-in-delay-1">
            Open to opportunities, collaborations, and conversations.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="elegant-border p-6 glass-effect animate-fade-in-delay-1 hover-lift text-center group">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-all duration-300">
              <Mail size={18} className="text-blue-300" />
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
            <p className="text-gray-300 font-light text-sm">brojengurung@gmail.com</p>
          </div>

          <div className="elegant-border p-6 glass-effect animate-fade-in-delay-2 hover-lift text-center group">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-all duration-300">
              <Phone size={18} className="text-blue-300" />
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</p>
            <p className="text-gray-300 font-light text-sm">+91 85091-80657</p>
          </div>

          <div className="elegant-border p-6 glass-effect animate-fade-in-delay-3 hover-lift text-center group">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-all duration-300">
              <MapPin size={18} className="text-blue-300" />
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
            <p className="text-gray-300 font-light text-sm">Gangtok, Sikkim, India</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="elegant-border p-8 glass-effect animate-fade-in-delay-2 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Find me on</p>
          <div className="flex justify-center gap-4">

            <a
              href="https://github.com/BrozG"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-gray-400 hover:text-white px-5 py-3 rounded-full transition-all duration-300 text-sm font-light"
            >
              <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/brojen-gurung-8137b2250"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-400/40 text-gray-400 hover:text-blue-300 px-5 py-3 rounded-full transition-all duration-300 text-sm font-light"
            >
              <Linkedin size={16} className="group-hover:scale-110 transition-transform duration-300" />
              LinkedIn
            </a>

            <a
              href="https://instagram.com/broz.grg"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-400/40 text-gray-400 hover:text-pink-300 px-5 py-3 rounded-full transition-all duration-300 text-sm font-light"
            >
              <Instagram size={16} className="group-hover:scale-110 transition-transform duration-300" />
              Instagram
            </a>

          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-600 text-xs mt-10 font-light">
          Built with React + TypeScript · Deployed on Vercel · © 2026 Brojen Gurung
        </p>

      </div>
    </section>
  );
};

export default Contacts;