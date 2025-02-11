import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import data from "../data.json";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const { greeting, intro, profileImage, socials, ctaHTML } = data[language].heroSection;

  return (
    <section id="hero" className="h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col text-center p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{greeting}</h1>
        <p className="text-xl mt-4">{intro}</p>
      </div>

      {profileImage && (
        <img src={`/${profileImage}`} className="rounded-full border-pink-500 border-4 w-40 h-40 object-cover" />
      )}

      <div className="flex gap-4 mb-6">
        {socials.map((social, index) => (
          <a key={index} href={`https://${social.link}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600">
            <img src={`/${social.logo}`} alt={social.altText} className="w-6 h-6" />
          </a>
        ))}
      </div>

      <div className="text-lg font-semibold bg-blue-700 p-4 rounded" dangerouslySetInnerHTML={{ __html: ctaHTML }} />
    </section>
  );
};

export default Hero;
