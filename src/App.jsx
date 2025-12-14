// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import CompetitiveProfiles from './components/CompetitiveProfiles';

export default function App(){
  return (
    <div className="min-h-screen max-w-350 mx-auto flex flex-col bg-gray-200/75 text-gray-900">
      <Header />
      <main className="container-hero w-full max-w-screen-1440 px-6 lg:px-12 mx-auto flex-1">
        <Hero />
        <Skills />
        <Certificates />
        <CompetitiveProfiles />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
