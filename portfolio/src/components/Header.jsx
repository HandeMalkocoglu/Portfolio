import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const { language, setLanguage } = useContext(LanguageContext);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newTheme = !prevMode;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "tr" : "en"));
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <h1 className="text-xl font-bold">
        {language === "en" ? "Portfolio" : "Portföy"}
      </h1>

      <div className="flex items-center gap-4">
        <label className="flex items-center cursor-pointer">
          <span className="mr-2">{isDarkMode ? "LIGHT MODE" : "DARK MODE"}</span>
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} className="hidden" />
          <div className="w-10 h-5 bg-gray-400 dark:bg-gray-700 rounded-full p-1 relative transition-all">
            <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all ${isDarkMode ? "translate-x-5" : ""}`}></div>
          </div>
        </label>

        <button onClick={toggleLanguage} className="px-3 py-1 bg-blue-500 dark:bg-blue-700 text-white rounded-md">
          {language === "en" ? "TR Türkçe" : "EN English"}
        </button>
      </div>
    </header>
  );
};

export default Header;
