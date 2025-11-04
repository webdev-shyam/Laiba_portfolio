import { Code, TrendingUp, Bot, Sparkles } from 'lucide-react';

function About() {
  const skills = [
    { icon: Code, text: 'Web Development' },
    { icon: TrendingUp, text: 'Meta Ads Management' },
    { icon: Bot, text: 'AI Chatbots' },
    { icon: Sparkles, text: 'Design & Editing' },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
          About <span className="bg-gradient-to-r from-[#7A3EF0] to-[#3AA0FF] bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="space-y-12">
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            I'm Laiba, a passionate digital service provider specializing in creating powerful online solutions.
            With expertise in web development, Meta ads management, AI chatbot creation, and creative design using
            Canva and CapCut, I help businesses establish and grow their digital presence with modern,
            results-driven strategies.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#7A3EF0]/50 hover:shadow-[0_0_30px_rgba(122,62,240,0.2)] transition-all duration-300 hover:scale-105"
              >
                <skill.icon className="w-8 h-8 text-[#3AA0FF] group-hover:text-[#7A3EF0] transition-colors" />
                <span className="text-sm font-medium text-center">{skill.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
