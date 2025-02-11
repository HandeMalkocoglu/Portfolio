import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import data from "../data.json";

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const { title, skills } = data[language].skillsSection;

  return (
    <section id="skills" className="max-w-5xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-24">
            <img src={`/${skill.icon}`} alt={skill.name} className="w-12 h-12 mb-2" />
            <span className="text-md font-semibold text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
