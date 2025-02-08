import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Skills from "../src/components/Skills";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { LanguageProvider } from "./context/LanguageContext"; 

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <Header />
        <Hero />
        <Skills />
        <Profile/>
        <Projects/>
        <Footer/>
      </div>
    </LanguageProvider>
  );
}

export default App;
