import { ExternalLink } from 'lucide-react';

function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      gradient: 'from-purple-600 to-blue-600',
      src: "assets/lypbazar.png",
      link: "https://lyallpurbazar.com/"
    },
    {
      title: 'Brand Campaign',
      category: 'Meta Ads',
      gradient: 'from-blue-600 to-cyan-600',
      
      src: "assets/mobileupdate.png",
      link: "https://booksg.com/"
    },
    {
      title: 'Customer Support Bot',
      category: 'AI Chatbot',
      gradient: 'from-cyan-600 to-teal-600',
      src: "assets/dora.png",
      link: "https://tart-feodora-mljfnuew.dcms.site/"
    },
    {
      title: 'Social Media Content',
      category: 'Design & Editing',
      gradient: 'from-teal-600 to-green-600',
      src: "assets/m11y.png",
      
      link: "https://m11lyp.com/"
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Latest <span className="bg-gradient-to-r from-[#7A3EF0] to-[#3AA0FF] bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(122,62,240,0.3)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-90 transition-opacity`}>
                <img className='opacity-40 hover:opacity-90' src={project.src} alt="lyp" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-end">
                <span className="text-sm font-medium text-white/80 mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className='px-3 py-2 rounded-md shadow-sm hover:shadow-lg hover:bg-blue-500 cursor-pointer'>View Project</span>
                  
                  <button>
                 <a target='_blank' href={project.link}> <ExternalLink  className="w-4 h-4" /></a>
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
