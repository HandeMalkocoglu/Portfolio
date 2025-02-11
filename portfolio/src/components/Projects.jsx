import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"; 
import data from "../data.json";

const Projects = () => {
  const { language } = useContext(LanguageContext); 
  const projects = data[language].projects; 

  return (
    <section id="projects" className="max-w-5xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">{language === "en" ? "Projects" : "Projeler"}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sol Proje */}
        <div className="bg-blue-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{projects.left.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2 flex-grow">{projects.left.desc}</p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {projects.left.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <a href={`https://${projects.left.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold">
              {language === "en" ? "GitHub Repo" : "GitHub Deposu"}
            </a>
            <a href={`https://${projects.left.visit}`} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 font-semibold">
              {language === "en" ? "Live Demo" : "Canlı Demo"}
            </a>
          </div>

          <img src={projects.left.image} alt={projects.left.title} className="mt-4 w-full h-44 object-cover rounded-md shadow-md" />
        </div>

        {/* Sağ Proje */}
        <div className="bg-green-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{projects.right.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2 flex-grow">{projects.right.desc}</p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {projects.right.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <a href={`https://${projects.right.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold">
              {language === "en" ? "GitHub Repo" : "GitHub Deposu"}
            </a>
            <a href={`https://${projects.right.visit}`} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 font-semibold">
              {language === "en" ? "Live Demo" : "Canlı Demo"}
            </a>
          </div>

          <img src={projects.right.image} alt={projects.right.title} className="mt-4 w-full h-44 object-cover rounded-md shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
