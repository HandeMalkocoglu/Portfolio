import { useState, useEffect } from "react";

const Header = () => {
  // Tema state'i (default: light)
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Dil state'i (default: en)
  const [language, setLanguage] = useState("en");

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "tr" : "en"));
  };

  // Tema değiştiğinde body'sine class ekleyerek tema değişimini uygula
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      {/* Başlık */}
      {/*<h1 className="text-xl font-bold">
        {language === "en" ? "Portfolio" : "Portföy"}
      </h1>*/}

      {/* Tema & Dil Seçenekleri */}
      <div className="flex items-center gap-4">
        {/* Tema Geçişi */}
        <label className="flex items-center cursor-pointer">
          <span className="mr-2 text-black dark:text-white">{isDarkMode ? "DARK MODE" : "LIGHT MODE"}</span>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            className="hidden"
          />
          <div className="w-10 h-5 bg-gray-400 dark:bg-gray-700 rounded-full p-1 relative transition-all">
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all ${
                isDarkMode ? "translate-x-5" : ""
              }`}
            ></div>
          </div>
        </label>

        {/* Dil Seçimi */}
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 bg-blue-500 dark:bg-blue-700 text-white rounded-md"
        >
          {language === "en" ? "TR TURKISH" : "EN ENGLISH"}
        </button>
      </div>
    </header>
  );
};

export default Header;
