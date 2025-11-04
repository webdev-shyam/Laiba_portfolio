import { Code, TrendingUp, Bot, Palette } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    },
    {
      icon: TrendingUp,
      title: 'Meta Ads Management',
      description: 'Strategic advertising campaigns on Facebook and Instagram to maximize ROI and reach your target audience effectively.',
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent chatbot solutions that automate customer service, engage users, and streamline business operations.',
    },
    {
      icon: Palette,
      title: 'Design & Editing',
      description: 'Eye-catching graphics and engaging video content created with Canva and CapCut to elevate your brand.',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          My <span className="bg-gradient-to-r from-[#7A3EF0] to-[#3AA0FF] bg-clip-text text-transparent">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#7A3EF0]/50 hover:shadow-[0_0_40px_rgba(122,62,240,0.3)] transition-all duration-500 hover:scale-105"
            >
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-[#7A3EF0]/20 to-[#3AA0FF]/20 w-fit group-hover:shadow-[0_0_20px_rgba(122,62,240,0.4)] transition-all duration-300">
                <service.icon className="w-8 h-8 text-[#3AA0FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
