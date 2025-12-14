// src/components/Projects.jsx
import { useMemo, useState } from 'react';
import projectsData from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects(){
  const [activeProject, setActiveProject] = useState(null);

  // group by stack ----- useMemo learn more -----
  const groups = useMemo(() => {
    const map = {};
    projectsData.forEach(p => {
      const key = p.stack || 'other';
      if (!map[key]) map[key] = [];
      map[key].push(p);
    });
    return map;
  }, []);

  const open = (p) => setActiveProject(p);
  const close = () => setActiveProject(null);

  return (
    <section id="projects" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p className="mb-6 text-sm text-gray-700">Notable projects grouped by stack.</p>

      {Object.entries(groups).map(([stack, items]) => (
        <div key={stack} className="mb-8">
          <h3 className="text-xl font-semibold capitalize mb-4">{stack}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(p => (
              <ProjectCard key={p.id} project={p} onOpen={open} />
            ))}
          </div>
        </div>
      ))}

      <ProjectModal project={activeProject} onClose={close} />
    </section>
  );
}
