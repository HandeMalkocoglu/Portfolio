import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import data from "../data.json";

const Skills = () => {
  const { language } = useContext(LanguageContext); 
  const { title, skills } = data[language].skillsSection;

  return (
    <section id="skills" className="p-6 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <img src={`/${skill.icon}`} alt={skill.name} className="w-12 h-12 mb-2" />
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
