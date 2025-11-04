import React from "react";

type Skill = {
  category: string;
  items: string[];
};

const skills: Skill[] = [
  {
    category: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript (Basic)"],
  },
  {
    category: "CMS & Web Tools",
    items: ["WordPress", "Elementor", "WooCommerce"],
  },
  {
    category: "UI/UX & Design",
    items: ["Figma", "Adobe Photoshop"],
  },
  {
    category: "Programming & Tools",
    items: ["Python (Basic)", "Unity", "MS Office", "Excel"],
  },
  {
    category: "Soft Skills",
    items: [
      "Time Management",
      "Team Collaboration",
      "Documentation",
      "Problem Solving",
      "Fast Learning",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-20 bg-[#0B0F19] text-white border-t border-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          My Skills
        </h2>
        <p className="text-gray-400 mt-2">
          A mix of creative, analytical, and technical abilities that help me
          build engaging digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-[#111629] p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              {skillGroup.category}
            </h3>
            <ul className="space-y-2">
              {skillGroup.items.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 text-sm flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
