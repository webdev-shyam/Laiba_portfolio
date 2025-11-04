import React from "react";

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
};

type Certificate = {
  title: string;
  platform: string;
  year: string;
};

const educationData: EducationItem[] = [
  {
    degree: "BS in Information Technology",
    institution: "Government College University, Faisalabad",
    year: "2020 - 2024",
  },
  {
    degree: "Intermediate (Pre-Medical)",
    institution: "Ideal Group of College, Sheikhupura",
    year: "2018 - 2020",
  },
  {
    degree: "Matriculation (Science)",
    institution: "Punjab Public High School, Sheikhupura",
    year: "2016 - 2018",
  },
];

const certifications: Certificate[] = [
  { title: "Frontend Web Development Bootcamp", platform: "", year: "2023" },
  { title: "WordPress for Beginners", platform: "Udemy", year: "2024" },
  {
    title: "Web Design Fundamentals",
    platform: "Coursera, University of Michigan",
    year: "2024",
  },
  {
    title: "Introduction to AI",
    platform: "Coursera (Stanford Online)",
    year: "2024",
  },
  { title: "AI & Machine Learning", platform: "Tevta GSTC", year: "2024" },
  {
    title: "Advanced Microsoft Word",
    platform: "LinkedIn Learning",
    year: "2023",
  },
  {
    title: "Designing & Deploying Computer Networks",
    platform: "Internet Society",
    year: "2023",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-20 bg-[#0B0F19] text-white border-t border-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Education & Certifications
        </h2>
        <p className="text-gray-400 mt-2">
          A blend of formal education and continuous learning.
        </p>
      </div>

      {/* Education */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#111629] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition"
          >
            <h3 className="text-lg font-semibold text-purple-400 mb-2">
              {edu.degree}
            </h3>
            <p className="text-gray-300">{edu.institution}</p>
            <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="max-w-4xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
          Certifications & Courses
        </h3>
        <ul className="space-y-3">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="flex justify-between bg-[#111629] p-4 rounded-xl border border-gray-800 hover:border-purple-500 transition"
            >
              <div>
                <p className="text-gray-200 font-medium">{cert.title}</p>
                <p className="text-gray-500 text-sm">{cert.platform}</p>
              </div>
              <span className="text-sm text-gray-400">{cert.year}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Currently Learning */}
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h3 className="text-2xl font-semibold text-purple-400 mb-3">
          Currently Learning
        </h3>
        <p className="text-gray-300 text-lg">
          Product Design & Motion Animation for Mobile Applications
        </p>
      </div>
    </section>
  );
};

export default Education;
