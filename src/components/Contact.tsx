
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
    // In a real application, this would download the actual resume file
    toast({
      title: "Resume Downloaded",
      description: "Thank you for your interest!",
    });
    console.log("Resume download initiated");
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a href="mailto:your.email@example.com" className="text-white hover:text-purple-400 transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-purple-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg w-full sm:w-auto justify-center"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
