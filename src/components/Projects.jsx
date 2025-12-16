// src/components/Projects.jsx
import { useState } from 'react';
import projectsData, { flutter_projects, django_projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects(){
  const [activeProject, setActiveProject] = useState(null);

  const open = (p) => setActiveProject(p);
  const close = () => setActiveProject(null);

  return (
    <section id="projects" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p className="mb-6 text-sm text-gray-700">Notable projects grouped by stack.</p>

      {/* Flutter projects section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Flutter Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flutter_projects.map(p => (
            <ProjectCard key={p.id} project={p} onOpen={open} />
          ))}
        </div>
      </div>

      {/* Django projects section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Django Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {django_projects.map(p => (
            <ProjectCard key={p.id} project={p} onOpen={open} />
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={close} />
    </section>
  );
}
