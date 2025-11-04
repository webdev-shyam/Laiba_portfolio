import { ArrowRight } from 'lucide-react';

function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Laiba —
              <span className="bg-gradient-to-r from-[#7A3EF0] to-[#3AA0FF] bg-clip-text text-transparent">
                Digital Service Provider
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              I create digital experiences that help brands grow online.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#7A3EF0] to-[#3AA0FF] rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-[0_0_30px_rgba(122,62,240,0.5)] transition-all duration-300 hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative animate-fade-in-delay">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(122,62,240,0.3)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF0]/20 to-[#3AA0FF]/20 z-10"></div>
            <img
              src="assets/heroine.jpg"
              alt="Professional working on laptop"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
