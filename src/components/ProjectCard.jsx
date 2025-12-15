// src/components/ProjectCard.jsx

export default function ProjectCard({ project, onOpen }){
	
  return (
    <div className="bg-white/50 border border-gray-500 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <button onClick={() => onOpen(project)} className="text-left w-full hover:cursor-pointer">
        <div className="h-44 w-full overflow-hidden">
          <img src={project.images?.[0] || '/app_ss/default.png'} alt={project.title}
               className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{project.description}</p>
          <div className="mt-3 text-xs">
            <span className="inline-block bg-indigo-50 text-indigo-700 px-2 py-1 rounded">{project.stack}</span>
          </div>
        </div>
      </button>
      <div className="p-3 border-t flex gap-2">
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
