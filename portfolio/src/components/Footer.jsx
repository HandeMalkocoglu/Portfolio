import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"; 
import data from "../data.json";

const Footer = () => {
  const { language } = useContext(LanguageContext); 
  const contact = data[language].contact; 

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">{language === "en" ? "Let’s work together on your next product." : "Bir sonraki ürününüz üzerinde birlikte çalışalım."}</h2>
      
      <div className="flex justify-center gap-6">
        {/* GitHub */}
        <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          GitHub
        </a>

        {/* LinkedIn */}
        <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
          LinkedIn
        </a>

        {/* E-posta */}
        <a href={`mailto:${contact.email}`} className="text-gray-700 dark:text-gray-300 hover:underline">
          Email
        </a>

        {/* Blog veya Kişisel Site */}
        <a href={`https://${contact.personalBlog}`} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
          {language === "en" ? "Personal Blog" : "Kişisel Blog"}
        </a>
      </div>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        {language === "en" ? "© 2024 All rights reserved." : "© 2024 Tüm hakları saklıdır."}
      </p>
    </footer>
  );
};

export default Footer;
