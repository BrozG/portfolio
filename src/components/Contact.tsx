
import { useState } from "react";
import { Mail, MapPin, Phone, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleDownloadResume = () => {
    toast({
      title: "Resume Downloaded",
      description: "Thank you for your interest!",
    });
    console.log("Resume download initiated");
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 animate-fade-in-up">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light animate-fade-in-delay-1">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-xl font-medium text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
                    <Mail className="text-gray-400 group-hover:text-white transition-colors duration-300" size={16} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <a href="mailto:your.email@example.com" className="text-white hover:text-gray-300 transition-colors duration-300 font-light">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
                    <Phone className="text-gray-400 group-hover:text-white transition-colors duration-300" size={16} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-gray-300 transition-colors duration-300 font-light">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
                    <MapPin className="text-gray-400 group-hover:text-white transition-colors duration-300" size={16} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-white font-light">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm font-medium w-full sm:w-auto justify-center hover:scale-105 hover:shadow-lg group"
              >
                <Download size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:tracking-wide transition-all duration-300">Download Resume</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover-glow animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-white transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-500 text-white placeholder-gray-500 text-sm transition-all duration-300 hover:border-gray-600"
                    placeholder="Your name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-white transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-500 text-white placeholder-gray-500 text-sm transition-all duration-300 hover:border-gray-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-white transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-500 text-white placeholder-gray-500 text-sm transition-all duration-300 hover:border-gray-600"
                  placeholder="What's this about?"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-white transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-500 text-white placeholder-gray-500 resize-none text-sm transition-all duration-300 hover:border-gray-600"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-sm hover:scale-105 hover:shadow-lg group"
              >
                <span className="group-hover:tracking-wide transition-all duration-300">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
