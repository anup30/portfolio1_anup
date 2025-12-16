// src/components/ProjectModal.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <button
            onClick={onClose}
            className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
          >
            Close
          </button>
        </div>

        {/* Scrollable content */}
        <div className="p-4 flex-1 overflow-auto">

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={16}
            className="w-full pb-10"
          >
            {(project.images || []).map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center h-[70vh]">
                  <a href={src} target="_blank" rel="noopener noreferrer">
                    <img
                      src={src}
                      alt={`${project.title}-${idx}`}
                      className="max-h-full max-w-full object-contain bg-gray-100 rounded cursor-zoom-in"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Description as list */}
          <div className="mt-4">
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {(project.description || []).map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>

            <p className="mt-3 text-xs">
              Tags: {(project.tags || []).join(', ')}
            </p>

            <div className="mt-3 flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" className="underline text-sm text-blue-600">GitHub</a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" className="underline text-sm text-blue-600">Live Demo</a>
              )}

              {project.api_github && (
                <a href={project.api_github} target="_blank" rel="noopener noreferrer" className="underline text-sm text-blue-600">api GitHub</a>
              )}
              {project.api_live && (
                <a href={project.api_live} target="_blank" rel="noopener noreferrer" className="underline text-sm text-blue-600">api live</a>
              )}
              {project.frontend_github && (
                <a href={project.frontend_github} target="_blank" rel="noopener noreferrer" className="underline text-sm text-blue-600">frontend GitHub</a>
              )}
              {project.frontend_live && (
                <a href={project.frontend_live} target="_blank" rel="noopener noreferrer" className="underline text-sm text-blue-600">frontend live</a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
