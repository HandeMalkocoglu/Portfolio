import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"; 
import data from "../data.json";

const Profile = () => {
  const { language } = useContext(LanguageContext); 
  const { information, aboutme } = data[language].profile; 

  return (
    <section id="profile" className="max-w-5xl mx-auto p-8 bg-gary-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">{language === "en" ? "Profile" : "Hakkımda"}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profil Bilgileri Kartı */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-pink-500">{language === "en" ? "Basic Information" : "Temel Bilgiler"}</h3>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300">
            <li><strong>{language === "en" ? "Birthday:" : "Doğum Tarihi:"}</strong> {information.birthday}</li>
            <li><strong>{language === "en" ? "Location:" : "İkamet Şehri:"}</strong> {information.location}</li>
            <li><strong>{language === "en" ? "Education:" : "Eğitim Durumu:"}</strong> {information.education}</li>
            <li><strong>{language === "en" ? "Role:" : "Tercih Ettiği Rol:"}</strong> {information.role}</li>
          </ul>
        </div>

        {/* Hakkımda Bölümü */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-blue-500">{language === "en" ? "About Me" : "Hakkımda"}</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{aboutme}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
