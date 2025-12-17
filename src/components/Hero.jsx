// src/components/Hero.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero(){
  return (
    <section id="hero" className="py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-3xl lg:text-4xl font-extrabold">Hello, I am <span className="text-brand-500">Anup Barua</span></h1>
          <p className="text-lg">
            Full-stack web & mobile developer. Proficient in Django, FastAPI, React and Flutter. Problem solver with strong CS fundamentals.
          </p>
          <p className="text-sm">
            <a href="/resources/resume_Anup_Barua.pdf" target="_blank" rel="noopener noreferrer"
               className="inline-block mt-3 px-4 py-2 border border-brand-500 rounded-md text-sm hover:bg-brand-50">
              Download Resume (pdf)
            </a>
          </p>

          <div className="flex gap-3 mt-4">
            <a href="https://github.com/anup30" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 border rounded">
              <FaGithub /> <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/anup-barua-a3137330a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 border rounded">
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
            <a href="mailto:anupbarua30@gmail.com" className="flex items-center gap-2 px-3 py-2 border rounded">
              <FaEnvelope /> <span>Email</span>
            </a>
          </div>
        </div>

        <div className="mx-auto">
          <img src="/resources/anup_200px.png" alt="Anup" className="w-44 h-44 rounded-full object-cover shadow-md" />
        </div>
      </div>
    </section>
  );
}
