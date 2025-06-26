import { Mail, Download, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative bg-contact overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 animate-fade-in-up">
          Get In Touch
        </h2>
        
        <div className="elegant-border p-12 glass-effect animate-fade-in-delay-1 mb-12">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:brojengurung3@gmail.com"
              className="group bg-white/90 text-black px-8 py-4 rounded-full hover:bg-white transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-xl backdrop-blur-sm flex items-center gap-2"
            >
              <Mail size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="group-hover:tracking-wide transition-all duration-300">Send Email</span>
            </a>
            
            <a
              href="BrozGCV.pdf"
              download
              className="group border border-white/30 text-white px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 text-sm font-medium hover:scale-105 backdrop-blur-sm flex items-center gap-2"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              <span className="group-hover:tracking-wide transition-all duration-300">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
