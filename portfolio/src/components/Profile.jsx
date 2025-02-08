import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"; 
import data from "../data.json";

const Profile = () => {
  const { language } = useContext(LanguageContext); 
  const { information, aboutme } = data[language].profile; 

  return (
    <section id="profile" className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-4">{language === "en" ? "About Me" : "Hakkımda"}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">{language === "en" ? "Profile Information" : "Profil Bilgileri"}</h3>
          <ul className="space-y-2">
            <li><strong>{language === "en" ? "Birthday:" : "Doğum Günü:"}</strong> {information.birthday}</li>
            <li><strong>{language === "en" ? "Location:" : "Konum:"}</strong> {information.location}</li>
            <li><strong>{language === "en" ? "Education:" : "Eğitim:"}</strong> {information.education}</li>
            <li><strong>{language === "en" ? "Role:" : "Rol:"}</strong> {information.role}</li>
          </ul>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">{language === "en" ? "About Me" : "Hakkımda"}</h3>
          <p className="text-gray-700 dark:text-gray-300">{aboutme}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
