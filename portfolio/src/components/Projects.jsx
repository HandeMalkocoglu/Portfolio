import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"; // Dil context'ini içe aktar
import data from "../data.json";

const Projects = () => {
  const { language } = useContext(LanguageContext); // Seçili dili al
  const projects = data[language].projects; // Seçili dile göre proje verilerini al

  return (
    <section id="projects" className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-6">{language === "en" ? "Projects" : "Projeler"}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sol Taraf (Left Project) */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          
          <h3 className="text-xl font-semibold mt-4">{projects.left.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{projects.left.desc}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {projects.left.tags.map((tag, index) => (
              <span key={index} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <a href={`https://${projects.left.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">
              {language === "en" ? "GitHub Repo" : "GitHub Deposu"}
            </a>
            <a href={`https://${projects.left.visit}`} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400">
              {language === "en" ? "Live Demo" : "Canlı Demo"}
            </a>
            
          </div>
          <img src={projects.left.image} alt={projects.left.title} className="w-full h-40 object-cover rounded-md" />
        </div>

        {/* Sağ Taraf (Right Project) */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          
          <h3 className="text-xl font-semibold mt-4">{projects.right.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{projects.right.desc}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {projects.right.tags.map((tag, index) => (
              <span key={index} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <a href={`https://${projects.right.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">
              {language === "en" ? "GitHub Repo" : "GitHub Deposu"}
            </a>
            <a href={`https://${projects.right.visit}`} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400">
              {language === "en" ? "Live Demo" : "Canlı Demo"}
            </a>
          </div>
          <img src={projects.right.image} alt={projects.right.title} className="w-full h-40 object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
