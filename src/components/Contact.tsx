import { useState } from 'react';
import { Mail, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Get in <span className="bg-gradient-to-r from-[#7A3EF0] to-[#3AA0FF] bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Let's Work Together</h3>
              <p className="text-gray-400 leading-relaxed">
                Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#7A3EF0]/50 transition-all duration-300">
              <Mail className="w-5 h-5 text-[#3AA0FF]" />
              <span className="text-gray-300"></span>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: 'https://www.facebook.com/laiba.khalid.243564/' },
                  { Icon: Instagram, href: 'https://www.instagram.com/laibakhalid1778?utm_source=qr&igsh=cHJnaGxuMml0a3Jk' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/laiba-khalid-035933283' },
                ].map(({ Icon, href }, index) => (
                  <a target='_blank'
                    key={index}
                    href={href}
                    className="p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-gradient-to-r hover:from-[#7A3EF0] hover:to-[#3AA0FF] hover:border-transparent hover:shadow-[0_0_20px_rgba(122,62,240,0.4)] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[#7A3EF0]/50 focus:outline-none focus:ring-2 focus:ring-[#7A3EF0]/20 transition-all duration-300 placeholder-gray-500"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[#7A3EF0]/50 focus:outline-none focus:ring-2 focus:ring-[#7A3EF0]/20 transition-all duration-300 placeholder-gray-500"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[#7A3EF0]/50 focus:outline-none focus:ring-2 focus:ring-[#7A3EF0]/20 transition-all duration-300 placeholder-gray-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="group w-full px-8 py-4 bg-gradient-to-r from-[#7A3EF0] to-[#3AA0FF] rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(122,62,240,0.5)] transition-all duration-300 hover:scale-105"
            >
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
