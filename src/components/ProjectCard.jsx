// src/components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ project, onOpen }){
  const thumb = project.thumbnail || project.images?.[0] || '/app_ss/default.png';

  return (
    <div className="bg-white/50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <button onClick={() => onOpen(project)} className="text-left w-full hover:cursor-pointer">
        <div className="relative h-44 w-full overflow-hidden group">
          <img
            src={thumb}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />

          {/* hand icon overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <span className="text-white text-3xl">👆</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>

          {/* description as multiple lines */}
          <div className="mt-2 text-sm text-gray-700">
            {(project.description || []).map((line, i) => (
              <div key={i} className="leading-relaxed">
                {line}
              </div>
            ))}
          </div>

          {/* tags badges */}
          <div className="mt-3 flex flex-wrap gap-2">
            {(project.tags || []).map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>

      <div className="p-3 border-t flex flex-wrap gap-2">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">GitHub</a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Live</a>
        )}
        {project.api_github && (
          <a href={project.api_github} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">api GitHub</a>
        )}
        {project.api_live && (
          <a href={project.api_live} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">api live</a>
        )}
        {project.frontend_github && (
          <a href={project.frontend_github} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">frontend GitHub</a>
        )}
        {project.frontend_live && (
          <a href={project.frontend_live} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">frontend live</a>
        )}
      </div>
    </div>
  );
}
