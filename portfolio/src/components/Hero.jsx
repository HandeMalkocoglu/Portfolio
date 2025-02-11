import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import data from "../data.json";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const { greeting, intro, profileImage, socials, ctaHTML } = data[language].heroSection;

  return (
    <section id="hero" className="mx-auto max-w-5xl p-8 shadow-lg flex flex-col md:flex-row md:items-center md:gap-8 justify-between">
      {/* Metin Alanı */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{greeting}</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-white">{intro}</p>

        {/* Sosyal Medya Bağlantıları */}
        <div className="flex gap-4 mt-4">
          {socials.map((social, index) => (
            <a key={index} href={`https://${social.link}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600">
              <img src={`/${social.logo}`} alt={social.altText} className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* CTA Butonu */}
        <div className="mt-6 text-lg font-semibold text-black px-6 py-3 cursor-pointer transition duration-300 dark:text-white" dangerouslySetInnerHTML={{ __html: ctaHTML }} />
      </div>

      {/* Profil Resmi */}
      {profileImage && (
        <div className="relative w-48 h-48 md:w-52 md:h-52 flex-none">
          <img src={`/${profileImage}`} className="w-full h-full object-cover border-4 border-pink-500 rounded-lg shadow-lg" alt="Profile" />
        </div>
      )}
    </section>
  );
};

export default Hero;
