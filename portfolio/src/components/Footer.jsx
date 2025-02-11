import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"; 
import data from "../data.json";

const Footer = () => {
  const { language } = useContext(LanguageContext); 
  const contact = data[language].contact; 

  return (
    <footer className="max-w-5xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-t-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-6">{language === "en" ? "Let’s work together on your next product." : "Bir sonraki ürününüz üzerinde birlikte çalışalım."}</h2>
      
      <div className="flex justify-center gap-8 mb-6">
        {/* GitHub */}
        <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
          GitHub
        </a>

        {/* LinkedIn */}
        <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 transition">
          LinkedIn
        </a>

        {/* E-posta */}
        <a href={`mailto:${contact.email}`} className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition">
          Email
        </a>

        {/* Blog veya Kişisel Site */}
        <a href={`https://${contact.personalBlog}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition">
          {language === "en" ? "Personal Blog" : "Kişisel Blog"}
        </a>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {language === "en" ? "© 2024 All rights reserved." : "© 2024 Tüm hakları saklıdır."}
      </p>
    </footer>
  );
};

export default Footer;
